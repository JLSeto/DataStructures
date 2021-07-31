"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEquals = void 0;
function assertEquals(result, expected) {
    if (typeof result == typeof expected) {
        if (result != expected) {
            console.error("TEST FAILED: Expected Value: " + expected + ", Received: " + result);
        }
        else {
            console.log("TEST PASSED: Expected Value: " + expected + ", Received: " + result);
        }
    }
    else {
        var x = "TEST FAILED: Expected Type: " + (typeof expected) + ", Received: " + (typeof result);
        console.error(x);
    }
}
exports.assertEquals = assertEquals;
