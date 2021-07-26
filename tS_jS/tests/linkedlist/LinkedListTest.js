"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../../src/linkedlist/DoublyLinkedList");
function assertEquals(result, expected) {
    if (typeof result == typeof expected) {
        if (result != expected) {
            throw new Error("Expected Value: " + expected + ", Received: " + result);
        }
        else {
            console.log("TEST PASSED: " + result);
        }
    }
    else {
        throw new Error("Expected Type: " + typeof expected + ", Received: " + typeof result);
    }
}
var LinkedListTest = /** @class */ (function () {
    function LinkedListTest() {
    }
    LinkedListTest.prototype.testToString = function () {
        var strs = new DoublyLinkedList_1.DoublyLinkedList();
        assertEquals(strs.toString(), "[  ]");
        strs.addLast("a");
        assertEquals(strs.toString(), "[ a ]");
        strs.addLast("b");
        assertEquals(strs.toString(), "[ a, b ]");
        strs.addLast("c");
        strs.addLast("d");
        strs.addLast("e");
        strs.addLast("f");
        assertEquals(strs.toString(), "[ a, b, c, d, e, f ]");
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
