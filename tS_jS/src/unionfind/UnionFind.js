"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionFind = void 0;
var UnionFind = /** @class */ (function () {
    function UnionFind(size) {
        // The number of elements in this union find
        this.sizeOf = 0;
        // Used to track the size of each of the component
        this.sz = new Array();
        // id[i] points to the parent of i, if id[i] = i then i is a root node
        this.id = new Array();
        // Tracks the number of components in the union find
        this.numComponents = 0;
        if (size <= 0) {
            throw new Error("Size <= 0 is not allowed");
        }
        this.sizeOf = this.numComponents = size;
        this.id = new Array(size);
        this.sz = new Array(size);
        for (var i = 0; i < size; i++) {
            this.id[i] = i; // Link each not to itself
            this.sz[i] = 1; // Each component is originally of size one
        }
    }
    // Find which component/set 'p' belongs to, takes amortized constant time.
    // Compress the path.
    UnionFind.prototype.find = function (p) {
        var root = p;
        while (root != this.id[root]) {
            root = this.id[root];
        }
        //Compress the path leading to the root.  
        // This is known as "path compression" and gives amortized time complexity
        while (p != root) {
            var next = this.id[p];
            this.id[p] = root;
            p = next;
        }
        return root;
    };
    // Unify the components/sets containing elements 'p' and 'q'
    UnionFind.prototype.unify = function (p, q) {
        var root1 = this.find(p);
        var root2 = this.find(q);
        //merge smaller set into larger set. Increase the size
        if (this.sz[root1] < this.sz[root2]) {
            this.id[root1] = root2;
            this.sz[root2] += this.sz[root1];
        }
        else {
            this.id[root2] = root1;
            this.sz[root1] += this.sz[root2];
        }
    };
    // Return whether or not the elements 'p' and 'q' are in the same component/set
    UnionFind.prototype.connected = function (p, q) {
        var rootp = this.find(p);
        var rootq = this.find(q);
        return rootp == rootq;
    };
    // Return the number of elements in the UnionFInd/Disjoint set
    UnionFind.prototype.size = function () {
        return this.sizeOf;
    };
    // Returns the number of remaining components/sets
    UnionFind.prototype.components = function () {
        return this.numComponents;
    };
    return UnionFind;
}());
exports.UnionFind = UnionFind;
