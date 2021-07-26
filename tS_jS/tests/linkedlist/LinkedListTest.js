"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../../src/linkedlist/DoublyLinkedList");
var commonHelpers_1 = require("../commonHelpers");
var LinkedListTest = /** @class */ (function () {
    function LinkedListTest() {
    }
    LinkedListTest.prototype.testToString = function () {
        var strs = new DoublyLinkedList_1.DoublyLinkedList();
        commonHelpers_1.assertEquals(strs.toString(), "[  ]");
        strs.addLast("a");
        commonHelpers_1.assertEquals(strs.toString(), "[ a ]");
        strs.addLast("b");
        commonHelpers_1.assertEquals(strs.toString(), "[ a, b ]");
        strs.addLast("c");
        strs.addLast("d");
        strs.addLast("e");
        strs.addLast("f");
        commonHelpers_1.assertEquals(strs.toString(), "[ a, b, c, d, e, f ]");
    };
    return LinkedListTest;
}());
var test = new LinkedListTest();
test.testToString();
// let x = new DoublyLinkedList<string>();
// x.addFirst("A");
// x.addFirst("B");
// x.addFirst("C");
// for(let entry of x)
// {
//     console.log(entry)
// }
// x.addFirst("D");
// console.log(x.toString())
// for(let entry of x)
// {
//     console.log(entry)
// }
