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
var Queue_1 = require("../../src/queue/Queue");
var commonHelpers_1 = require("../commonHelpers");
var QueueTest = /** @class */ (function () {
    function QueueTest() {
    }
    QueueTest.prototype.genericTest = function () {
        var e_1, _a;
        var q = new Queue_1.Queue();
        (0, commonHelpers_1.assertEquals)(q.size(), 0);
        var testArr = [9, 4, 2, 7, 2];
        try {
            for (var testArr_1 = __values(testArr), testArr_1_1 = testArr_1.next(); !testArr_1_1.done; testArr_1_1 = testArr_1.next()) {
                var i = testArr_1_1.value;
                q.offer(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (testArr_1_1 && !testArr_1_1.done && (_a = testArr_1.return)) _a.call(testArr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        for (var i = 0; i < testArr.length; i++) {
            (0, commonHelpers_1.assertEquals)(q.poll(), testArr[i]);
        }
    };
    return QueueTest;
}());
var qTest = new QueueTest();
qTest.genericTest();
