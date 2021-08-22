"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryHeap = void 0;
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(sz) {
        // # of Elements currently inside the heap
        this.heapSize = 0;
        // Dynamic List to track elements inside the heap
        this.heap = null;
        var t = new Array();
        if (typeof sz == "number") {
            sz = sz;
            sz = (!!sz) ? sz : 1;
            this.heap = new Array(sz);
        }
        else if (sz == undefined) {
            this.heap = new Array();
        }
        else if (typeof sz == typeof t) {
            var elems = sz;
            this.heap = new Array(sz.length);
            //Place all element in heap
            for (var i = 0; i < this.size(); i++) {
                this.heap.push(elems[i]);
            }
            // Heapify process O(n)
            for (var i = Math.max(0, (this.size() / 2) - 1); i >= 0; i--) {
                this.sink(i);
            }
        }
    }
    // Perform bottom up node swim O(log(n))
    BinaryHeap.prototype.swim = function (k) {
        // Grab the index of the next parent node WRT to k
        var parent = Math.floor((k - 1) / 2);
        // Keep swimming while we have not reached the
        // root and while we're less than our parent.
        while (k > 0 && this.less(k, parent)) {
            this.swap(parent, k);
            k = parent;
            // Grab the index of the next parent node WRT to k
            parent = Math.floor((k - 1) / 2);
        }
    };
    // Top down node sink, O(log(n))
    BinaryHeap.prototype.sink = function (k) {
        while (true) {
            var left_leaf_idx = Math.floor(2 * k + 1);
            var right_leaf_idx = Math.floor(2 * k + 2);
            var smallest = left_leaf_idx; // assume left is smallest
            // Find which is smaller left or right
            // If right is smaller set smallest to be right
            if (right_leaf_idx < this.size() && this.less(right_leaf_idx, left_leaf_idx)) {
                smallest = right_leaf_idx;
            }
            // Stop if we're outside the bounds of the tree
            // or stop early if we cannot sink k anymore
            if (left_leaf_idx >= this.size() || this.less(k, smallest)) {
                break;
            }
            this.swap(smallest, k);
        }
    };
    // Swap two nodes. Assumes i & j are valid, O(1)
    BinaryHeap.prototype.swap = function (i, j) {
        var elem_i = this.heap[i];
        var elem_j = this.heap[j];
        this.heap[i] = elem_j;
        this.heap[j] = elem_i;
    };
    // Tests if the value of node i <= node j
    // This method assumes i & j are valid indices, O(1)
    BinaryHeap.prototype.less = function (i, j) {
        return (this.heap[i] <= this.heap[j]) ? true : false;
    };
    // Adds an element to the priority queue, the
    // element must not be null, O(log(n))
    BinaryHeap.prototype.add = function (elem) {
        if (elem == null) {
            throw new Error("IllegalArgument Exception");
        }
        this.heap.push(elem);
        this.swim(this.size() - 1);
    };
    // Returns the value of the element with the lowest
    // priority in this priority queue. If the priority
    // queue is empty null is returned.
    BinaryHeap.prototype.peek = function () {
        return (this.isEmpty()) ? null : this.heap[0];
    };
    // Removes the root of the heap, O(log(n))
    BinaryHeap.prototype.poll = function () {
        return (this.isEmpty()) ? null : this.removeAt(0);
    };
    // Removes a particular element in the heap, O(n)
    BinaryHeap.prototype.remove = function (element) {
        if (element == null) {
            return false;
        }
        for (var i = 0; i < this.size(); i++) {
            if (element == this.heap[i]) {
                this.removeAt(i);
                return true;
            }
        }
        return false;
    };
    // Removes a node at particular index, O(log(n))
    BinaryHeap.prototype.removeAt = function (i) {
        if (this.isEmpty()) {
            return null;
        }
        else {
            var indexOfLastElem = this.size() - 1;
            var removed_data = this.heap[i];
            //swap
            this.swap(i, indexOfLastElem);
            //obliterate the value
            this.heap.pop();
            //check if the last element was removed (don't need to sink or swim since last element)
            if (i == indexOfLastElem) {
                return removed_data;
            }
            var elem = this.heap[i];
            //Try sinking the element
            this.sink(i);
            //If sinking did not work try swimming
            if (this.heap[i] == elem) {
                this.swim(i);
            }
            return removed_data;
        }
    };
    // Test if an element is in heap, O(n)
    BinaryHeap.prototype.contains = function (elem) {
        for (var i = 0; i < this.size(); i++) {
            if (this.heap[i] == elem) {
                return true;
            }
        }
        return false;
    };
    // Returns true/false depending on if the priority queue is empty
    BinaryHeap.prototype.isEmpty = function () {
        return (this.heap.length == 0);
    };
    // Clears everything inside the heap, O(n)
    BinaryHeap.prototype.clear = function () {
        for (var i = 0; i < this.size(); i++) {
            this.heap.pop();
        }
    };
    // Return the size of the heap
    BinaryHeap.prototype.size = function () {
        return this.heap.length;
    };
    // Recursively checks if this heap is a min heap
    // This method is just for testing purposes to make
    // sure the heap invariant is still being maintained
    // Called this method with k=0 to start at the root
    BinaryHeap.prototype.isMinHeap = function (k) {
        // If we are outside the bounds of the heap return true
        var heapSize = this.size();
        if (k >= heapSize) {
            return true;
        }
        var left_leaf_idx = 2 * k + 1;
        var right_leaf_idx = 2 * k + 2;
        // Make sure that the current node k is less than
        // both of its children left, and right if they exist
        // return false otherwise to indicate an invalid heap
        if (left_leaf_idx < heapSize && this.less(left_leaf_idx, k)) {
            return false;
        }
        if (right_leaf_idx < heapSize && this.less(right_leaf_idx, k)) {
            return false;
        }
        // Recurse on both children to make sure they're also valid heaps
        return this.isMinHeap(left_leaf_idx) && this.isMinHeap(right_leaf_idx);
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
