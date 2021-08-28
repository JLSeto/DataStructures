"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicArray = void 0;
var DynamicArray = /** @class */ (function () {
    function DynamicArray(capacity) {
        var _this = this;
        //length user thinks the array is
        this.len = 0;
        //Actual Array Size
        this.capacity = 0;
        //Iterator
        this.iterIdx = 0;
        this.next = function () {
            var done = false;
            if (done) {
                return { done: done, value: null };
            }
            if (_this.iterIdx == _this.len) {
                done = true;
                _this.iterIdx = 0;
                return { done: done, value: null };
            }
            var value = _this.arr[_this.iterIdx];
            _this.iterIdx++;
            return { done: false, value: value };
        };
        if (capacity == undefined) {
            capacity = 16;
        }
        else if (capacity < 0) {
            throw new Error("Illegal Capacity: " + capacity);
        }
        this.arr = new Array(capacity);
        this.capacity = capacity;
    }
    DynamicArray.prototype.size = function () {
        return this.len;
    };
    DynamicArray.prototype.isEmpty = function () {
        return (this.len == 0); //based length user thinks array is
    };
    DynamicArray.prototype.get = function (index) {
        if (index >= this.len || index < 0) {
            throw new Error("IndexOutOfBoundsException");
        }
        return this.arr[index];
    };
    DynamicArray.prototype.set = function (index, elem) {
        if (index < 0 || index >= this.len) {
            throw new Error("IndexOutOfBoundsException");
        }
        this.arr[index] = elem;
    };
    DynamicArray.prototype.clear = function () {
        for (var i = 0; i < this.len; i++) {
            this.arr[i] = null;
        }
    };
    DynamicArray.prototype.add = function (elem) {
        if (this.len + 1 >= this.capacity) {
            if (this.capacity == 0) {
                this.capacity = 1;
            }
            else {
                this.capacity *= 2;
            }
            var new_arr = new Array(this.capacity);
            for (var i = 0; i < this.len; i++) {
                new_arr[i] = this.arr[i];
            }
            this.arr = new_arr;
        }
        this.arr[this.len++] = elem;
    };
    DynamicArray.prototype.removeAt = function (rm_index) {
        if (rm_index < 0 || rm_index >= this.len) {
            throw new Error("IndexOutOfBoundsException");
        }
        var data = this.arr[rm_index];
        var new_arr = new Array(this.len - 1);
        for (var i = 0, j = 0; i < this.len; i++, j++) {
            if (i == rm_index) {
                j--; //Skip over rm_index by fixing j temporarily
            }
            else {
                new_arr[j] = this.arr[i];
            }
        }
        this.arr = new_arr;
        this.capacity = --this.len;
        return data;
    };
    DynamicArray.prototype.remove = function (obj) {
        var index = this.indexOf(obj);
        if (index == -1) {
            return false;
        }
        else {
            this.removeAt(index);
            return true;
        }
    };
    DynamicArray.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.len; i++) {
            if (obj == this.arr[i]) {
                return i;
            }
        }
        return -1;
    };
    DynamicArray.prototype.contains = function (obj) {
        return (this.indexOf(obj) != -1);
    };
    //Iterator
    DynamicArray.prototype[Symbol.iterator] = function () {
        this.iterIdx = 0;
        return { next: this.next };
    };
    DynamicArray.prototype.arrayString = function () {
        if (this.len == 0) {
            return "[]";
        }
        else {
            var sb = "";
            for (var i = 0; i < this.len - 1; i++) {
                sb += this.arr[i] + ", ";
            }
            sb += this.arr[this.len - 1] + "]";
            return sb;
        }
    };
    return DynamicArray;
}());
exports.DynamicArray = DynamicArray;
