"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue_1 = require("../../src/priorityqueue/PriorityQueue");
var commonHelpers_1 = require("../commonHelpers");
var PriorityQueueTest = /** @class */ (function () {
    function PriorityQueueTest() {
    }
    PriorityQueueTest.prototype.genericTest = function () {
        var pq = new PriorityQueue_1.PQueue([4, 1, 1, 1, 2, 2, 3]);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 1);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 1);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 1);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 2);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 2);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 3);
        (0, commonHelpers_1.assertEquals)(pq.poll(), 4);
    };
    return PriorityQueueTest;
}());
var bht = new PriorityQueueTest();
bht.genericTest();
