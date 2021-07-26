"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEquals = void 0;
function assertEquals(result, expected) {
    if (typeof result == typeof expected) {
        if (result != expected) {
            throw new Error("Expected Value: " + expected + ", Received: " + result);
        }
        else {
            console.log("TEST PASSED: " + result);
        }
    }
    else {
        throw new Error("Expected Type: " + typeof expected + ", Received: " + typeof result);
    }
}
exports.assertEquals = assertEquals;
