import { assert }           from "console";
import { Stack }     from "../../src/stack/Stack";
import { assertEquals }     from "../commonHelpers"

class StackTest
{
    constructor(){}

    public genericTest()
    {
        let stak = new Stack();

        assertEquals(stak.size(), 0);

        let testArr = [9, 4, 2, 7, 2];

        for(let i of testArr)
        {
            stak.push(i);
        }

        for(let i = testArr.length - 1; i >= 0; i--)
        {
            assertEquals(stak.pop(), testArr[i]);
        }
    }
}

let stakTest = new StackTest();

stakTest.genericTest();