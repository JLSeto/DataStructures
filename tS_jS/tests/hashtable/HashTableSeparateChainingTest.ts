import { assert } from 'console';
import { HashTableSeparateChaining } from '../../src/hashtable/HashTableSeparateChaining';
import { assertEquals }     from "../commonHelpers"

class HashTableSeparateChainingTest
{
    testGeneric() : void
    {
        let test = new HashTableSeparateChaining<number, string>(null, null);

        assertEquals(test.sizeOf(), 0);
        test.insert(1, "hello");
        assertEquals(test.sizeOf(), 1);
        assertEquals(test.get(1), "hello");
        test.insert(2, "cat");
        assertEquals(test.sizeOf(), 2);
        test.insert(3, "dog");
        test.insert(4, "4");
        test.insert(5, "5");
        test.insert(6, "6");
        test.insert(7, "7");
        test.insert(8, "8");
        assertEquals(test.sizeOf(), 8);
        assertEquals(test.get(3), "dog");
        assertEquals(test.get(2), "cat");
        test.insert(1, "ffff");
        assertEquals(test.get(1), "ffff");
        assertEquals(test.remove(1), "ffff");
        assertEquals(test.remove(2), "cat");
        assertEquals(test.remove(3), "dog");
    }
}

let x = new HashTableSeparateChainingTest;

x.testGeneric();