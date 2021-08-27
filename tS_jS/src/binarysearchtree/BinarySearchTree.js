"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.TreeTraversalOrder = void 0;
var TreeTraversalOrder;
(function (TreeTraversalOrder) {
    TreeTraversalOrder[TreeTraversalOrder["PRE_ORDER"] = 0] = "PRE_ORDER";
    TreeTraversalOrder[TreeTraversalOrder["IN_ORDER"] = 1] = "IN_ORDER";
    TreeTraversalOrder[TreeTraversalOrder["POST_ORDER"] = 2] = "POST_ORDER";
    TreeTraversalOrder[TreeTraversalOrder["LEVEL_ORDER"] = 3] = "LEVEL_ORDER";
})(TreeTraversalOrder = exports.TreeTraversalOrder || (exports.TreeTraversalOrder = {}));
var Node = /** @class */ (function () {
    function Node(left, right, elem) {
        this.data = null;
        this.left = null;
        this.right = null;
        this.data = elem;
        this.left = left;
        this.right = right;
    }
    return Node;
}());
function compareTo(elem, data) {
    if (elem > data) {
        return 1;
    }
    else if (data > elem) {
        return -1;
    }
    else {
        return 0;
    }
}
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        //Track the number of nodes in the BST
        this.nodeCount = 0;
        //This BST is a rooted tree so we maintain a handle on the root node
        this.root = null;
    }
    BinarySearchTree.prototype.isEmpty = function () {
        return (this.nodeCount == 0);
    };
    BinarySearchTree.prototype.size = function () {
        return this.nodeCount;
    };
    //Add an element to the binary tree. 
    //Return true if successfully inserted
    BinarySearchTree.prototype.add = function (elem) {
        //Check if element already exist
        if (this.contains(elem)) {
            return false;
        }
        else {
            this.root = this.addHelper(this.root, elem);
            this.nodeCount++;
            return true;
        }
    };
    //Private method to recursively add a value in the binary tree
    BinarySearchTree.prototype.addHelper = function (node, elem) {
        //Base Case: found a leaf node
        if (node == null) {
            node = new Node(null, null, elem);
        }
        else {
            //Pick subtree to insert element
            if (this.compareTo(elem, node.data) < 0) {
                node.left = this.addHelper(node.left, elem);
            }
            else {
                node.right = this.addHelper(node.right, elem);
            }
        }
        return node;
    };
    //Remove a value from this binary tree if it exists, O(n)
    BinarySearchTree.prototype.remove = function (elem) {
        if (this.contains(elem)) {
            this.root = this.removeHelper(this.root, elem);
            this.nodeCount--;
            return true;
        }
        return false;
    };
    BinarySearchTree.prototype.removeHelper = function (node, elem) {
        //Base Case
        if (node == null) {
            return null;
        }
        var cmp = this.compareTo(elem, node.data);
        //Dig Left
        if (cmp < 0) {
            node.left = this.removeHelper(node.left, elem);
        }
        //Dig right
        else if (cmp > 0) {
            node.right = this.removeHelper(node.right, elem);
        }
        //Found Node
        else {
            if (node.left == null) {
                return node.right;
            }
            else if (node.right == null) {
                return node.left;
            }
            else {
                //Find the leftmost node in the right subtree (min)
                var tmp = this.findMin(node.right);
                //Find the rightmost node in the left subtree (min)
                // let tmp = this.findMax(node.left);
                //Swap the data
                node.data = tmp.data;
                //Go into the right subtree and remove the leftmost node
                //we found and swapped data with.
                //Prevents having 2 nodes in the tree with same value
                node.right = this.removeHelper(node.right, tmp.data);
                //For largest node in left subtree
                // node.left = this.removeHelper(node.left, tmp.data);
            }
        }
        return node;
    };
    BinarySearchTree.prototype.findMin = function (node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    };
    BinarySearchTree.prototype.findMax = function (node) {
        while (node.right != null) {
            node = node.right;
        }
        return node;
    };
    //Checks if element exists in the tree and returns true if it does
    BinarySearchTree.prototype.contains = function (elem) {
        return this.containsHelper(this.root, elem);
    };
    //Private recursive method to find an element in the tree
    BinarySearchTree.prototype.containsHelper = function (node, elem) {
        //Base Case: Reached Bottom - Value not Found
        if (node == null) {
            return false;
        }
        var cmp = compareTo(elem, node.data);
        //Dig into the left subtree because the value we're looking for is smaller
        //than the current value
        if (cmp < 0) {
            return this.containsHelper(node.left, elem);
        }
        //Dig into the right subtree because the value we're looking for
        //is greater than the current value
        else if (cmp > 0) {
            return this.containsHelper(node.right, elem);
        }
        //elem == node.data so return true
        else {
            return true;
        }
    };
    BinarySearchTree.prototype.height = function () {
        return this.heightHelper(this.root);
    };
    BinarySearchTree.prototype.heightHelper = function (node) {
        if (node == null) {
            return 0;
        }
        else {
            return Math.max(this.heightHelper(node.left), this.heightHelper(node.right)) + 1;
        }
    };
    BinarySearchTree.prototype.compareTo = function (elem, elem2) {
        if (elem == elem2) {
            return 0;
        }
        else if (elem > elem2) {
            return 1;
        }
        else {
            return -1;
        }
    };
    BinarySearchTree.prototype.preOrderTraversal = function () {
        var stack, expectedNodeCount, node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stack = new Array();
                    expectedNodeCount = this.nodeCount;
                    stack.push(this.root);
                    _a.label = 1;
                case 1:
                    if (!(stack.length > 0)) return [3 /*break*/, 3];
                    if (expectedNodeCount != this.nodeCount) {
                        throw new Error("ConcurrentModificationException");
                    }
                    node = stack.pop();
                    if (node.right != null) {
                        stack.push(node.right);
                    }
                    if (node.left != null) {
                        stack.push(node.left);
                    }
                    return [4 /*yield*/, node.data];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    BinarySearchTree.prototype.inOrderTraversal = function () {
        var stack, expectedNodeCount, trav, node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stack = new Array();
                    expectedNodeCount = this.nodeCount;
                    stack.push(this.root);
                    trav = this.root;
                    _a.label = 1;
                case 1:
                    if (!(stack.length > 0)) return [3 /*break*/, 3];
                    if (expectedNodeCount != this.nodeCount) {
                        throw new Error("ConcurrentModificationException");
                    }
                    //Dig Left
                    while (trav != null && trav.left != null) {
                        stack.push(trav.left);
                        trav = trav.left;
                    }
                    node = stack.pop();
                    if (node.right != null) {
                        stack.push(node.right);
                        trav = node.right;
                    }
                    return [4 /*yield*/, node.data];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    BinarySearchTree.prototype.postOrderTraversal = function () {
        var stack1, stack2, expectedNodeCount, node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stack1 = new Array();
                    stack2 = new Array();
                    expectedNodeCount = this.nodeCount;
                    stack1.push(this.root);
                    while (stack1.length > 0) {
                        node = stack1.pop();
                        if (node != null) {
                            stack2.push(node);
                            if (node.left != null) {
                                stack1.push(node.left);
                            }
                            if (node.right != null) {
                                stack1.push(node.right);
                            }
                        }
                    }
                    _a.label = 1;
                case 1:
                    if (!(stack2.length > 0)) return [3 /*break*/, 3];
                    if (expectedNodeCount != this.nodeCount) {
                        throw new Error("ConcurrentModificationException");
                    }
                    return [4 /*yield*/, stack2.pop().data];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    BinarySearchTree.prototype.levelOrderTraversal = function () {
        var queue, expectedNodeCount, node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queue = new Array();
                    expectedNodeCount = this.nodeCount;
                    queue.push(this.root);
                    _a.label = 1;
                case 1:
                    if (!(queue.length > 0)) return [3 /*break*/, 3];
                    if (expectedNodeCount != this.nodeCount) {
                        throw new Error("ConcurrentModificationException");
                    }
                    node = queue.shift();
                    if (node.left != null) {
                        queue.push(node.left);
                    }
                    if (node.right != null) {
                        queue.push(node.right);
                    }
                    return [4 /*yield*/, node.data];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
