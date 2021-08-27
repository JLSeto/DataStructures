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
        console_1.assert(bst.contains(7) == true);
        console_1.assert(bst.contains(25) == true);
        console_1.assert(bst.contains(1) == false);
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
        console_1.assert(x.next().value == 7);
        console_1.assert(x.next().value == 5);
        console_1.assert(x.next().value == 4);
        console_1.assert(x.next().value == 2);
        console_1.assert(x.next().value == 6);
        console_1.assert(x.next().value == 20);
        console_1.assert(x.next().value == 15);
        console_1.assert(x.next().value == 10);
        console_1.assert(x.next().value == 33);
        console_1.assert(x.next().value == 25);
    };
    BinarySearchTreeTest.prototype.inOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.inOrderTraversal();
        console_1.assert(x.next().value == 2);
        console_1.assert(x.next().value == 4);
        console_1.assert(x.next().value == 5);
        console_1.assert(x.next().value == 6);
        console_1.assert(x.next().value == 7);
        console_1.assert(x.next().value == 10);
        console_1.assert(x.next().value == 15);
        console_1.assert(x.next().value == 20);
        console_1.assert(x.next().value == 25);
        console_1.assert(x.next().value == 33);
    };
    BinarySearchTreeTest.prototype.postOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.postOrderTraversal();
        console_1.assert(x.next().value == 1);
        console_1.assert(x.next().value == 5);
        console_1.assert(x.next().value == 3);
        console_1.assert(x.next().value == 8);
        console_1.assert(x.next().value == 6);
        console_1.assert(x.next().value == 12);
        console_1.assert(x.next().value == 14);
        console_1.assert(x.next().value == 13);
        console_1.assert(x.next().value == 19);
        console_1.assert(x.next().value == 17);
        console_1.assert(x.next().value == 15);
        console_1.assert(x.next().value == 11);
    };
    BinarySearchTreeTest.prototype.levelOrderTest = function () {
        var bst = new BinarySearchTree_1.BinarySearchTree();
        var testVals = [11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19];
        for (var i = 0; i < testVals.length; i++) {
            bst.add(testVals[i]);
        }
        var x = bst.levelOrderTraversal();
        console_1.assert(x.next().value == 11);
        console_1.assert(x.next().value == 6);
        console_1.assert(x.next().value == 15);
        console_1.assert(x.next().value == 3);
        console_1.assert(x.next().value == 8);
        console_1.assert(x.next().value == 13);
        console_1.assert(x.next().value == 17);
        console_1.assert(x.next().value == 1);
        console_1.assert(x.next().value == 5);
        console_1.assert(x.next().value == 12);
        console_1.assert(x.next().value == 14);
        console_1.assert(x.next().value == 19);
    };
    return BinarySearchTreeTest;
}());
var bstt = new BinarySearchTreeTest();
bstt.genericTest();
