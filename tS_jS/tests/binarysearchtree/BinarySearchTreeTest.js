"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var BinarySearchTree_1 = require("../../src/binarysearchtree/BinarySearchTree");
var BinarySearchTreeTest = /** @class */ (function () {
    function BinarySearchTreeTest() {
    }
    BinarySearchTreeTest.prototype.genericTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        (0, console_1.assert)(bst.contains(7) == true);
        (0, console_1.assert)(bst.contains(25) == true);
        (0, console_1.assert)(bst.contains(1) == false);
        this.preOrderTest();
        this.inOrderTest();
        this.postOrderTest();
        this.levelOrderTest();
    };
    BinarySearchTreeTest.prototype.preOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.preOrderTraversal();
        (0, console_1.assert)(x.next().value == 7);
        (0, console_1.assert)(x.next().value == 5);
        (0, console_1.assert)(x.next().value == 4);
        (0, console_1.assert)(x.next().value == 2);
        (0, console_1.assert)(x.next().value == 6);
        (0, console_1.assert)(x.next().value == 20);
        (0, console_1.assert)(x.next().value == 15);
        (0, console_1.assert)(x.next().value == 10);
        (0, console_1.assert)(x.next().value == 33);
        (0, console_1.assert)(x.next().value == 25);
    };
    BinarySearchTreeTest.prototype.inOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.inOrderTraversal();
        (0, console_1.assert)(x.next().value == 2);
        (0, console_1.assert)(x.next().value == 4);
        (0, console_1.assert)(x.next().value == 5);
        (0, console_1.assert)(x.next().value == 6);
        (0, console_1.assert)(x.next().value == 7);
        (0, console_1.assert)(x.next().value == 10);
        (0, console_1.assert)(x.next().value == 15);
        (0, console_1.assert)(x.next().value == 20);
        (0, console_1.assert)(x.next().value == 25);
        (0, console_1.assert)(x.next().value == 33);
    };
    BinarySearchTreeTest.prototype.postOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.postOrderTraversal();
        (0, console_1.assert)(x.next().value == 1);
        (0, console_1.assert)(x.next().value == 5);
        (0, console_1.assert)(x.next().value == 3);
        (0, console_1.assert)(x.next().value == 8);
        (0, console_1.assert)(x.next().value == 6);
        (0, console_1.assert)(x.next().value == 12);
        (0, console_1.assert)(x.next().value == 14);
        (0, console_1.assert)(x.next().value == 13);
        (0, console_1.assert)(x.next().value == 19);
        (0, console_1.assert)(x.next().value == 17);
        (0, console_1.assert)(x.next().value == 15);
        (0, console_1.assert)(x.next().value == 11);
    };
    BinarySearchTreeTest.prototype.levelOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.levelOrderTraversal();
        (0, console_1.assert)(x.next().value == 11);
        (0, console_1.assert)(x.next().value == 6);
        (0, console_1.assert)(x.next().value == 15);
        (0, console_1.assert)(x.next().value == 3);
        (0, console_1.assert)(x.next().value == 8);
        (0, console_1.assert)(x.next().value == 13);
        (0, console_1.assert)(x.next().value == 17);
        (0, console_1.assert)(x.next().value == 1);
        (0, console_1.assert)(x.next().value == 5);
        (0, console_1.assert)(x.next().value == 12);
        (0, console_1.assert)(x.next().value == 14);
        (0, console_1.assert)(x.next().value == 19);
    };
    return BinarySearchTreeTest;
}());
var bstt = new BinarySearchTreeTest();
bstt.genericTest();
