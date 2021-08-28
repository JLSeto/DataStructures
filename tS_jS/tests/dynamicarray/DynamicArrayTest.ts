import { assert }           from "console";
import { DynamicArray }     from "../../src/dynamicarray/DynamicArray";
import { assertEquals }     from "../commonHelpers"

class DynamicArrayTest
{
    constructor(){}

    public genericTest()
    {
        let da = new DynamicArray();

        assertEquals(da.size(), 0);

        let testArr = [9, 4, 2, 7, 2];

        for(let i of testArr)
        {
            da.add(i);
        }

        let idx = 0;
        for(let i of da)
        {
            assert(i == testArr[idx]);
            idx++;
        }
    }
}

let dat = new DynamicArrayTest();

dat.genericTest();