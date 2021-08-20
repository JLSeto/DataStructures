"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(arr) {
        //# of Elements currently inside the heap
        this.heapSize = 0;
        //Dynamic List to track elements inside the heap
        this.heap = null;
    }
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
