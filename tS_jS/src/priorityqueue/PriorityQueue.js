"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PQueue = void 0;
var PQueue = /** @class */ (function () {
    function PQueue(sz) {
        // # of Elements currently inside the heap
        this.heapSize = 0;
        var t = new Array();
        switch (typeof sz) {
            case 'number':
                sz = sz;
                sz = (!!sz) ? sz : 1;
                this.heap = new Array(sz);
                break;
            case (typeof t):
                sz = sz;
                this.heap = new Array();
                //Place all element in heap
                for (var i = 0; i < sz.length; i++) {
                    this.heap.push(sz[i]);
                }
                // Heapify process O(n)
                for (var i = Math.max(0, Math.floor((sz.length / 2)) - 1); i >= 0; i--) {
                    this.sink(i);
                }
                break;
            case 'undefined':
            default:
                this.heap = new Array();
                break;
        }
    }
    // Perform bottom up node swim O(log(n))
    PQueue.prototype.swim = function (k) {
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
    PQueue.prototype.sink = function (k) {
        while (true) {
            var left_leaf_idx = 2 * k + 1;
            var right_leaf_idx = 2 * k + 2;
            var smallest = left_leaf_idx; // assume left is smallest
            // Find which is smaller left or right
            // If right is smaller set smallest to be right
            if (right_leaf_idx < this.heap.length
                && this.less(right_leaf_idx, left_leaf_idx)) {
                smallest = right_leaf_idx;
            }
            // Stop if we're outside the bounds of the tree
            // or stop early if we cannot sink k anymore
            if (left_leaf_idx < this.heap.length
                && this.less(smallest, k)) {
                this.swap(smallest, k); //since the leaf node is smaller than k node, swap for min heap
                k = smallest;
            }
            else {
                break;
            }
        }
    };
    // Swap two nodes. Assumes i & j are valid, O(1)
    PQueue.prototype.swap = function (i, j) {
        var elem_i = this.heap[i];
        var elem_j = this.heap[j];
        this.heap[i] = elem_j;
        this.heap[j] = elem_i;
    };
    // Tests if the value of node i <= node j
    // This method assumes i & j are valid indices, O(1)
    PQueue.prototype.less = function (i, j) {
        return (this.heap[i] <= this.heap[j]) ? true : false;
    };
    // Adds an element to the priority queue, the
    // element must not be null, O(log(n))
    PQueue.prototype.add = function (elem) {
        if (elem == null) {
            throw new Error("IllegalArgument Exception");
        }
        this.heap.push(elem);
        this.swim(this.size() - 1);
    };
    // Returns the value of the element with the lowest
    // priority in this priority queue. If the priority
    // queue is empty null is returned.
    PQueue.prototype.peek = function () {
        return (this.isEmpty()) ? null : this.heap[0];
    };
    // Removes the root of the heap, O(log(n))
    PQueue.prototype.poll = function () {
        //1. swap the root node with the last leaf
        this.swap(0, this.heap.length - 1);
        //2. remove the element
        var removed = this.heap.pop();
        //3. sink the root node
        this.sink(0);
        //4. return the removed element
        return removed;
        // return (this.isEmpty()) ? null as any : this.removeAt(0);
    };
    // Removes a particular element in the heap, O(n)
    PQueue.prototype.remove = function (element) {
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
    PQueue.prototype.removeAt = function (i) {
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
    PQueue.prototype.contains = function (elem) {
        for (var i = 0; i < this.size(); i++) {
            if (this.heap[i] == elem) {
                return true;
            }
        }
        return false;
    };
    // Returns true/false depending on if the priority queue is empty
    PQueue.prototype.isEmpty = function () {
        return (this.heap.length == 0);
    };
    // Clears everything inside the heap, O(n)
    PQueue.prototype.clear = function () {
        for (var i = 0; i < this.size(); i++) {
            this.heap.pop();
        }
    };
    // Return the size of the heap
    PQueue.prototype.size = function () {
        return this.heap.length;
    };
    // Recursively checks if this heap is a min heap
    // This method is just for testing purposes to make
    // sure the heap invariant is still being maintained
    // Called this method with k=0 to start at the root
    PQueue.prototype.isMinHeap = function (k) {
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
    return PQueue;
}());
exports.PQueue = PQueue;
