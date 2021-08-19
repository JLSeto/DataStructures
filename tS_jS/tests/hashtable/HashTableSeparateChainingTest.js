"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashTableSeparateChaining_1 = require("../../src/hashtable/HashTableSeparateChaining");
var commonHelpers_1 = require("../commonHelpers");
var HashTableSeparateChainingTest = /** @class */ (function () {
    function HashTableSeparateChainingTest() {
    }
    HashTableSeparateChainingTest.prototype.testGeneric = function () {
        var test = new HashTableSeparateChaining_1.HashTableSeparateChaining(null, null);
        commonHelpers_1.assertEquals(test.sizeOf(), 0);
        test.insert(1, "hello");
        commonHelpers_1.assertEquals(test.sizeOf(), 1);
        commonHelpers_1.assertEquals(test.get(1), "hello");
        test.insert(2, "cat");
        commonHelpers_1.assertEquals(test.sizeOf(), 2);
        test.insert(3, "dog");
        test.insert(4, "4");
        test.insert(5, "5");
        test.insert(6, "6");
        test.insert(7, "7");
        test.insert(8, "8");
        commonHelpers_1.assertEquals(test.sizeOf(), 8);
        commonHelpers_1.assertEquals(test.get(3), "dog");
        commonHelpers_1.assertEquals(test.get(2), "cat");
        test.insert(1, "ffff");
        commonHelpers_1.assertEquals(test.get(1), "ffff");
        commonHelpers_1.assertEquals(test.remove(1), "ffff");
        commonHelpers_1.assertEquals(test.remove(2), "cat");
        commonHelpers_1.assertEquals(test.remove(3), "dog");
    };
    return HashTableSeparateChainingTest;
}());
var x = new HashTableSeparateChainingTest;
x.testGeneric();
