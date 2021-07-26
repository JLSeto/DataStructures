import { DoublyLinkedList } from "../../src/linkedlist/DoublyLinkedList";
import { assertEquals }     from "../commonHelpers"

class LinkedListTest
{
    testToString() : void
    {
        let strs = new DoublyLinkedList();
        assertEquals(strs.toString(), "[  ]");
        strs.addLast("a");
        assertEquals(strs.toString(), "[ a ]");
        strs.addLast("b");
        assertEquals(strs.toString(), "[ a, b ]");
        strs.addLast("c");
        strs.addLast("d");
        strs.addLast("e");
        strs.addLast("f");
        assertEquals(strs.toString(), "[ a, b, c, d, e, f ]");
    }
}

let test = new LinkedListTest();
test.testToString();
// let x = new DoublyLinkedList<string>();
// x.addFirst("A");
// x.addFirst("B");
// x.addFirst("C");

// for(let entry of x)
// {
//     console.log(entry)
// }

// x.addFirst("D");

// console.log(x.toString())

// for(let entry of x)
// {
//     console.log(entry)
// }