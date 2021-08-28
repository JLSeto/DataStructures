"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var DynamicArray_1 = require("../../src/dynamicarray/DynamicArray");
var commonHelpers_1 = require("../commonHelpers");
var DynamicArrayTest = /** @class */ (function () {
    function DynamicArrayTest() {
    }
    DynamicArrayTest.prototype.genericTest = function () {
        var e_1, _a, e_2, _b;
        var da = new DynamicArray_1.DynamicArray();
        (0, commonHelpers_1.assertEquals)(da.size(), 0);
        var testArr = [9, 4, 2, 7, 2];
        try {
            for (var testArr_1 = __values(testArr), testArr_1_1 = testArr_1.next(); !testArr_1_1.done; testArr_1_1 = testArr_1.next()) {
                var i = testArr_1_1.value;
                da.add(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (testArr_1_1 && !testArr_1_1.done && (_a = testArr_1.return)) _a.call(testArr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var idx = 0;
        try {
            for (var da_1 = __values(da), da_1_1 = da_1.next(); !da_1_1.done; da_1_1 = da_1.next()) {
                var i = da_1_1.value;
                (0, console_1.assert)(i == testArr[idx]);
                idx++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (da_1_1 && !da_1_1.done && (_b = da_1.return)) _b.call(da_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return DynamicArrayTest;
}());
var dat = new DynamicArrayTest();
dat.genericTest();
