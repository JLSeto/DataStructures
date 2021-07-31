"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTableSeparateChaining = void 0;
var DoublyLinkedList_1 = require("../linkedlist/DoublyLinkedList");
var Key = /** @class */ (function () {
    function Key(key) {
        this.key = key;
    }
    Key.prototype.hashCode = function () {
        var hash = 0;
        for (var i = 0; i < String(this.key).length; i++) {
            var character = String(this.key).charCodeAt(i);
            hash = ((hash << 5) - hash) + character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    return Key;
}());
var Entry = /** @class */ (function () {
    function Entry(key, value) {
        this.key = new Key(key);
        this.value = value;
        this.hash = this.key.hashCode();
    }
    Entry.prototype.equals = function (other) {
        if (other.hash != this.hash) {
            return false;
        }
        else {
            return (this.key == other.key);
        }
    };
    Entry.prototype.toString = function () {
        return this.key + " => " + this.value;
    };
    return Entry;
}());
var HashTableSeparateChaining = /** @class */ (function () {
    function HashTableSeparateChaining(capacity, maxLoadFactor) {
        this.maxLoadFactor = 0;
        this.capacity = 0;
        this.threshold = 0;
        this.size = 0;
        this.table = new Array();
        if (capacity == null && maxLoadFactor == null) {
            capacity = HashTableSeparateChaining.DEFAULT_CAPACITY;
            maxLoadFactor = HashTableSeparateChaining.DEFAULT_LOAD_FACTOR;
        }
        else if (capacity != null && maxLoadFactor == null) {
            capacity = this.capacity;
            maxLoadFactor = HashTableSeparateChaining.DEFAULT_LOAD_FACTOR;
        }
        if (capacity != null && capacity < 0) {
            throw new Error("Illegal Capacity");
        }
        if (maxLoadFactor == null || maxLoadFactor <= 0 || !isFinite(maxLoadFactor)) {
            throw new Error("Illegal maxLoadFactor");
        }
        this.maxLoadFactor = maxLoadFactor;
        this.capacity = Math.max(capacity, HashTableSeparateChaining.DEFAULT_CAPACITY);
        this.threshold = Math.floor(this.capacity * this.maxLoadFactor);
        this.table = new Array(this.capacity).fill(null);
    }
    // Returns the number of elements currently inside the hash-table
    HashTableSeparateChaining.prototype.sizeOf = function () {
        return this.size;
    };
    // Returns true/false depending on wether the hash-table is empty
    HashTableSeparateChaining.prototype.isEmpty = function () {
        return this.size == 0;
    };
    // Converts a hash value to an index. Strips the negative sign
    // and places the hash value in the domain of [0, capacity)
    HashTableSeparateChaining.prototype.normalizeIndex = function (keyHash) {
        return (keyHash & 0x7FFFFFFF) % this.capacity;
    };
    HashTableSeparateChaining.prototype.clear = function () {
        //let e = new DoublyLinkedList<Entry<K, V>>();
        this.table.fill(null);
        this.size = 0;
    };
    // Returns true or false depending on wether a key is in the hash table
    HashTableSeparateChaining.prototype.hasKey = function (key) {
        var keyS = new Key(key);
        var bucketIndex = this.normalizeIndex(keyS.hashCode());
        return (this.bucketSeekEntry(bucketIndex, key) != null);
    };
    HashTableSeparateChaining.prototype.insert = function (key, value) {
        if (key == null) {
            throw new Error("Null Key");
        }
        var newEntry = new Entry(key, value);
        var bucketIndex = this.normalizeIndex(newEntry.hash);
        return this.bucketInsertEntry(bucketIndex, newEntry);
    };
    HashTableSeparateChaining.prototype.bucketInsertEntry = function (bucketIndex, entry) {
        var bucket = this.table[bucketIndex];
        if (bucket == null) {
            this.table[bucketIndex] = bucket = new DoublyLinkedList_1.DoublyLinkedList();
        }
        var existentEntry = this.bucketSeekEntry(bucketIndex, entry.key.key);
        if (existentEntry == null) {
            this.table[bucketIndex].addLast(entry);
            if (++this.size > this.threshold) {
                this.resizeTable();
            }
            return null; //Use null to indicate no previous entry
        }
        else {
            var oldVal = existentEntry.value;
            existentEntry.value = entry.value;
            return oldVal;
        }
    };
    //get a key's value from the map and return the value
    HashTableSeparateChaining.prototype.get = function (key) {
        if (key == null) {
            return null;
        }
        var bucketIndex = this.normalizeIndex((new Key(key)).hashCode());
        var entry = this.bucketSeekEntry(bucketIndex, key);
        return (entry != null) ? entry.value : null;
    };
    HashTableSeparateChaining.prototype.bucketSeekEntry = function (bucketIndex, key) {
        var e_1, _a;
        if (key == null) {
            return null;
        }
        var bucket = this.table[bucketIndex];
        if (bucket == null) {
            return null;
        }
        try {
            for (var bucket_1 = __values(bucket), bucket_1_1 = bucket_1.next(); !bucket_1_1.done; bucket_1_1 = bucket_1.next()) {
                var entry = bucket_1_1.value;
                if ((entry === null || entry === void 0 ? void 0 : entry.key.key) == key) {
                    return entry;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (bucket_1_1 && !bucket_1_1.done && (_a = bucket_1.return)) _a.call(bucket_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    //remove a key value pair using a key. returns the value
    HashTableSeparateChaining.prototype.remove = function (key) {
        if (key == null) {
            return null;
        }
        var bucketIndex = this.normalizeIndex((new Key(key)).hashCode());
        return this.bucketRemoveEntry(bucketIndex, key);
    };
    HashTableSeparateChaining.prototype.bucketRemoveEntry = function (bucketIndex, key) {
        var entry = this.bucketSeekEntry(bucketIndex, key);
        if (entry != null) {
            var links = this.table[bucketIndex];
            links.remove(entry);
            --this.size;
            return entry.value;
        }
        else {
            return null;
        }
    };
    HashTableSeparateChaining.prototype.resizeTable = function () {
        var e_2, _a;
        this.capacity *= 2;
        this.threshold = Math.floor(this.capacity * this.maxLoadFactor);
        var newTable = new Array(this.capacity);
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] != null) {
                try {
                    for (var _b = (e_2 = void 0, __values(this.table[i])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var entry = _c.value;
                        var bucketIndex = this.normalizeIndex(entry.hash);
                        var bucket = newTable[bucketIndex];
                        if (bucket == null) {
                            newTable[bucketIndex] = bucket = new DoublyLinkedList_1.DoublyLinkedList();
                            bucket.addLast(entry);
                        }
                        this.table[i].clear();
                        this.table[i] = null;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        this.table = newTable;
    };
    HashTableSeparateChaining.DEFAULT_CAPACITY = 3;
    HashTableSeparateChaining.DEFAULT_LOAD_FACTOR = 0.75;
    return HashTableSeparateChaining;
}());
exports.HashTableSeparateChaining = HashTableSeparateChaining;
