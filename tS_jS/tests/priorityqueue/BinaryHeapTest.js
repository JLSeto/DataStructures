"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeap_1 = require("../../src/priorityqueue/BinaryHeap");
var commonHelpers_1 = require("../commonHelpers");
var BinaryHeapTest = /** @class */ (function () {
    function BinaryHeapTest() {
    }
    BinaryHeapTest.prototype.genericTest = function () {
        var pq = new BinaryHeap_1.BinaryHeap();
        for (var i = 7; i > 0; i--) {
            pq.add(i);
        }
        pq.add(20);
        pq.add(5);
        pq.add(99);
        pq.add(-2);
        commonHelpers_1.assertEquals(pq.size(), 11);
        commonHelpers_1.assertEquals(pq.poll(), -2);
        commonHelpers_1.assertEquals(pq.poll(), 1);
        commonHelpers_1.assertEquals(pq.poll(), 2);
        commonHelpers_1.assertEquals(pq.poll(), 5);
        commonHelpers_1.assertEquals(pq.poll(), 7);
        commonHelpers_1.assertEquals(pq.poll(), 3);
        commonHelpers_1.assertEquals(pq.poll(), 6);
        commonHelpers_1.assertEquals(pq.poll(), 4);
    };
    return BinaryHeapTest;
}());
var bht = new BinaryHeapTest();
bht.genericTest();
