"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var DoublyLinkedList_1 = require("../linkedlist/DoublyLinkedList");
var Stack = /** @class */ (function () {
    function Stack() {
        this.list = new DoublyLinkedList_1.DoublyLinkedList();
    }
    //Return the # of elements in the stack
    Stack.prototype.size = function () {
        return this.list.sizeOf();
    };
    //Return if Stack is empty
    Stack.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    //Push to the stack
    Stack.prototype.push = function (elem) {
        this.list.addFirst(elem);
    };
    //Pop the stack
    Stack.prototype.pop = function () {
        return this.list.removeFirst();
    };
    Stack.prototype.peek = function () {
        return this.list.peekFirst();
    };
    return Stack;
}());
exports.Stack = Stack;
