"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data, prev, next) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
    Node.prototype.toString = function () {
        return String(this.data);
    };
    return Node;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        var _this = this;
        this.size = 0;
        //Iterator variables
        this.done = false;
        this.counter = 0;
        this.next = function () {
            var _a;
            if (_this.done) {
                return { done: _this.done, value: null };
            }
            if (_this.iter == null) {
                _this.done = true;
                return { done: _this.done, value: null };
            }
            var value = _this.iter.data;
            _this.iter = (_a = _this.iter) === null || _a === void 0 ? void 0 : _a.next;
            return { done: false, value: value };
        };
    }
    //Empty the linked list O(n)
    DoublyLinkedList.prototype.clear = function () {
        var trav = this.head;
        while (trav != null) {
            var next = trav.next;
            trav.prev = trav.next = null;
            trav.data = null;
            trav = next;
        }
        this.head = this.tail = this.iter = trav = null;
        this.size = 0;
    };
    //Return the size of the linked list O(1)
    DoublyLinkedList.prototype.sizeOf = function () {
        return this.size;
    };
    //Is the linked list empty? O(1)
    DoublyLinkedList.prototype.isEmpty = function () {
        return (this.size == 0);
    };
    //Add a node to the tail of the linked list O(1)
    DoublyLinkedList.prototype.addLast = function (elem) {
        var _a;
        if (this.isEmpty()) {
            this.head = this.tail = this.iter = new Node(elem, null, null);
        }
        else {
            this.tail.next = new Node(elem, this.tail, null);
            this.tail = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.next;
        }
        this.size++;
    };
    //Add an element to the beginning of the linked list O(1)
    DoublyLinkedList.prototype.addFirst = function (elem) {
        var _a;
        if (this.isEmpty()) {
            this.head = this.tail = this.iter = new Node(elem, null, null);
        }
        else {
            this.head.prev = new Node(elem, null, this.head);
            this.head = this.iter = (_a = this.head) === null || _a === void 0 ? void 0 : _a.prev;
        }
        this.size++;
    };
    //Add an element at a specified index
    DoublyLinkedList.prototype.addAt = function (index, data) {
        if (index < 0) {
            throw new Error("Illegal Index");
        }
        if (index == this.size) {
            this.addLast(data);
            return;
        }
        if (index == 0) {
            this.addFirst(data);
            return;
        }
        var temp = this.head;
        for (var i = 0; i < index - 1; i++) {
            temp = temp === null || temp === void 0 ? void 0 : temp.next;
        }
        var newNode = new Node(data, temp, temp === null || temp === void 0 ? void 0 : temp.next);
        temp.next.prev = newNode;
        temp.next = newNode;
        this.size++;
    };
    //Check the value of the first node if it exists O(1)
    DoublyLinkedList.prototype.peekFirst = function () {
        var _a;
        if (this.isEmpty()) {
            throw new Error("Empty List");
        }
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
    };
    //Check the value of the last node if it exists O(1)
    DoublyLinkedList.prototype.peekLast = function () {
        var _a;
        if (this.isEmpty()) {
            throw new Error("Empty list");
        }
        return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
    };
    //Remove the first value at the head of the linked list O(1)
    DoublyLinkedList.prototype.removeFirst = function () {
        var _a, _b;
        if (this.isEmpty()) {
            throw new Error("Empty list");
        }
        var data = (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        this.head = this.iter = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
        this.size--;
        if (this.isEmpty()) {
            this.tail = null; //set tail to null if empty
        }
        else {
            this.head.prev = this.iter.prev = null;
        }
        return data;
    };
    //Remove the last value at the tail of the linked list O(1)
    DoublyLinkedList.prototype.removeLast = function () {
        var _a, _b;
        if (this.isEmpty()) {
            throw new Error("Empty list");
        }
        var data = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
        this.tail = (_b = this.tail) === null || _b === void 0 ? void 0 : _b.prev;
        this.size--;
        if (this.isEmpty()) {
            this.head = this.iter = null;
        }
        else {
            this.tail.next = null;
        }
        return data;
    };
    //Remove an arbitrary node from the linked list, O(1)
    DoublyLinkedList.prototype.removeNode = function (node) {
        if ((node === null || node === void 0 ? void 0 : node.prev) == null) {
            return this.removeFirst();
        }
        if (node.next == null) {
            return this.removeLast();
        }
        //Make the pointers of adjacent nodes skip over 'node'
        node.next.prev = node.prev;
        node.prev.next = node.next;
        //Temporarily store the data we want to return
        var data = node.data;
        //memory cleanup
        node.data = null;
        node = node.prev = node.next = null;
        this.size--;
        return data;
    };
    //Remove a node at a particular index
    DoublyLinkedList.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Illegal Argument Exception");
        }
        var i;
        var trav;
        if (index < this.size / 2) //Search from the front of list
         {
            for (i = 0, trav = this.head; i != index; i++) {
                trav = trav === null || trav === void 0 ? void 0 : trav.next;
            }
        }
        else //Search from the back of the list
         {
            for (i = this.size - 1, trav = this.tail; i != index; i--) {
                trav = trav === null || trav === void 0 ? void 0 : trav.prev;
            }
        }
        return this.removeNode(trav);
    };
    //Remove a particular value in the linked list, O(n)
    DoublyLinkedList.prototype.remove = function (obj) {
        var trav = this.head;
        //Support searching for null
        if (obj == null) {
            for (trav = this.head; trav != null; trav = trav.next) {
                if (trav.data == null) {
                    this.removeNode(trav);
                    return true;
                }
            }
        }
        else {
            for (trav = this.head; trav != null; trav = trav.next) {
                if (obj == trav.data) {
                    this.removeNode(trav);
                    return true;
                }
            }
        }
        return false;
    };
    //Find the index of a particular value in the linked list, O(n)
    DoublyLinkedList.prototype.indexOf = function (obj) {
        var index = 0;
        var trav = this.head;
        //Support searching for null
        if (obj == null) {
            for (trav = this.head; trav != null; trav = trav.next, index++) {
                if (trav.data == null) {
                    return index;
                }
            }
        }
        else {
            for (trav = this.head; trav != null; trav = trav.next, index++) {
                if (obj == trav.data) {
                    return index;
                }
            }
        }
        return -1;
    };
    // Check is a value is contained within the linked list
    DoublyLinkedList.prototype.contains = function (obj) {
        return (this.indexOf(obj) != -1);
    };
    DoublyLinkedList.prototype.toString = function () {
        var trav = this.head;
        var str = "[ ";
        while (trav != null) {
            str += trav.data;
            if (trav.next != null) {
                str += ", ";
            }
            trav = trav.next;
        }
        str += " ]";
        return str;
    };
    //Iterator
    DoublyLinkedList.prototype[Symbol.iterator] = function () {
        return { next: this.next };
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
