"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnionFind_1 = require("../../src/unionfind/UnionFind");
var commonHelpers_1 = require("../commonHelpers");
var UnionFindTest = /** @class */ (function () {
    function UnionFindTest() {
    }
    UnionFindTest.prototype.numIslands = function (grid) {
        var size = grid.length * grid[0].length;
        var uF = new UnionFind_1.UnionFind(size);
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == "1") {
                    //check left right up down for a connected island
                    // row * i + j
                    var center = grid[0].length * i + j;
                    var left = grid[0].length * i + j - 1;
                    var right = grid[0].length * i + j + 1;
                    var up = grid[0].length * (i - 1) + j;
                    var down = grid[0].length * (i + 1) + j;
                    if (j - 1 >= 0 && grid[i][j - 1] == "1") {
                        uF.unify(left, center);
                    }
                    if (j + 1 < grid[0].length && grid[i][j + 1] == "1") {
                        uF.unify(right, center);
                    }
                    if (i - 1 >= 0 && grid[i - 1][j] == "1") {
                        uF.unify(up, center);
                    }
                    if (i + 1 < grid.length && grid[i + 1][j] == "1") {
                        uF.unify(down, center);
                    }
                }
            }
        }
        var new_set = new Set();
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == "1") {
                    var centerCoord = i * grid[0].length + j;
                    var x = uF.find(centerCoord);
                    if (!new_set.has(x)) {
                        new_set.add(x);
                    }
                }
            }
        }
        return new_set.size;
    };
    return UnionFindTest;
}());
var grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
var grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
var test = new UnionFindTest();
commonHelpers_1.assertEquals(test.numIslands(grid), 1);
commonHelpers_1.assertEquals(test.numIslands(grid2), 3);
