"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var DoublyLinkedList_1 = require("../linkedlist/DoublyLinkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = new DoublyLinkedList_1.DoublyLinkedList();
    }
    Queue.prototype.offer = function (elem) {
        this.list.addLast(elem);
    };
    Queue.prototype.poll = function () {
        return this.list.removeFirst();
    };
    Queue.prototype.peek = function () {
        return this.list.peekFirst();
    };
    Queue.prototype.size = function () {
        return this.list.sizeOf();
    };
    Queue.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    return Queue;
}());
exports.Queue = Queue;
