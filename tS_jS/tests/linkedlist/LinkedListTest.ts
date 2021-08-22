import { DoublyLinkedList } from "../../src/linkedlist/DoublyLinkedList";
import { assertEquals }     from "../commonHelpers"

class LinkedListTest
{
    public testToString() : void
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
        if(!strs.isEmpty())
        {
            for(let s of strs)
            {
                assertEquals(s, s);
                break;
            }

            // console.log(strs)
            for(let s of strs)
            {
                assertEquals(s, s);
            }
    
            for(let s of strs)
            {
                assertEquals(s, s);
            }
        }
    }
}

let test = new LinkedListTest();
test.testToString();