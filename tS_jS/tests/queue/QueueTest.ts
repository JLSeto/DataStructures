import { assert }           from "console";
import { Queue }     from "../../src/queue/Queue";
import { assertEquals }     from "../commonHelpers"

class QueueTest
{
    constructor(){}

    public genericTest()
    {
        let q = new Queue();

        assertEquals(q.size(), 0);

        let testArr = [9, 4, 2, 7, 2];

        for(let i of testArr)
        {
            q.offer(i);
        }

        for(let i = 0; i < testArr.length; i++)
        {
            assertEquals(q.poll(), testArr[i]);
        }
    }
}

let qTest = new QueueTest();

qTest.genericTest();