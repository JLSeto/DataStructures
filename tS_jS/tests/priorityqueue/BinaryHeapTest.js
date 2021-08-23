"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue_1 = require("../../src/priorityqueue/PriorityQueue");
var commonHelpers_1 = require("../commonHelpers");
var PriorityQueueTest = /** @class */ (function () {
    function PriorityQueueTest() {
    }
    PriorityQueueTest.prototype.genericTest = function () {
        var pq = new PriorityQueue_1.PQueue([4, 1, 1, 1, 2, 2, 3]);
        // for(let i = 7; i > 0; i--)
        // {
        //     pq.add(i)
        // }
        // pq.add(20);
        // pq.add(5);
        // pq.add(99);
        // pq.add(-2);
        // assertEquals(pq.size(), 11);
        // assertEquals(pq.poll(), -2);
        // assertEquals(pq.poll(), 1);
        // assertEquals(pq.poll(), 2);
        // assertEquals(pq.poll(), 5);
        // assertEquals(pq.poll(), 7);
        // assertEquals(pq.poll(), 3);
        // assertEquals(pq.poll(), 6);
        // assertEquals(pq.poll(), 4);
        commonHelpers_1.assertEquals(pq.poll(), 1);
        commonHelpers_1.assertEquals(pq.poll(), 1);
        commonHelpers_1.assertEquals(pq.poll(), 1);
        commonHelpers_1.assertEquals(pq.poll(), 2);
        commonHelpers_1.assertEquals(pq.poll(), 2);
        commonHelpers_1.assertEquals(pq.poll(), 3);
        commonHelpers_1.assertEquals(pq.poll(), 4);
    };
    return PriorityQueueTest;
}());
var bht = new PriorityQueueTest();
bht.genericTest();
