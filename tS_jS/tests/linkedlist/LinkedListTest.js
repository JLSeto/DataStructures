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
var DoublyLinkedList_1 = require("../../src/linkedlist/DoublyLinkedList");
var commonHelpers_1 = require("../commonHelpers");
var LinkedListTest = /** @class */ (function () {
    function LinkedListTest() {
    }
    LinkedListTest.prototype.testToString = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var strs = new DoublyLinkedList_1.DoublyLinkedList();
        commonHelpers_1.assertEquals(strs.toString(), "[  ]");
        strs.addLast("a");
        commonHelpers_1.assertEquals(strs.toString(), "[ a ]");
        strs.addLast("b");
        commonHelpers_1.assertEquals(strs.toString(), "[ a, b ]");
        strs.addLast("c");
        strs.addLast("d");
        strs.addLast("e");
        strs.addLast("f");
        commonHelpers_1.assertEquals(strs.toString(), "[ a, b, c, d, e, f ]");
        if (!strs.isEmpty()) {
            try {
                for (var strs_1 = __values(strs), strs_1_1 = strs_1.next(); !strs_1_1.done; strs_1_1 = strs_1.next()) {
                    var s = strs_1_1.value;
                    commonHelpers_1.assertEquals(s, s);
                    break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (strs_1_1 && !strs_1_1.done && (_a = strs_1.return)) _a.call(strs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                // console.log(strs)
                for (var strs_2 = __values(strs), strs_2_1 = strs_2.next(); !strs_2_1.done; strs_2_1 = strs_2.next()) {
                    var s = strs_2_1.value;
                    commonHelpers_1.assertEquals(s, s);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (strs_2_1 && !strs_2_1.done && (_b = strs_2.return)) _b.call(strs_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                for (var strs_3 = __values(strs), strs_3_1 = strs_3.next(); !strs_3_1.done; strs_3_1 = strs_3.next()) {
                    var s = strs_3_1.value;
                    commonHelpers_1.assertEquals(s, s);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (strs_3_1 && !strs_3_1.done && (_c = strs_3.return)) _c.call(strs_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    };
    return LinkedListTest;
}());
var test = new LinkedListTest();
test.testToString();
