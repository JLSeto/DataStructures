import { PQueue } from "../../src/priorityqueue/PriorityQueue";
import { assertEquals }     from "../commonHelpers"

class PriorityQueueTest
{
    genericTest() : void
    {
        let pq: PQueue<number> = new PQueue([4,1,1,1,2,2,3]);

        // for(let i = 7; i > 0; i--)
        // {
        //     pq.add(i)
        // }

        // pq.add(20);
        // pq.add(5);
        // pq.add(99);
        // pq.add(-2);

        // assertEquals(pq.size(), 11);
        // assertEquals(pq.poll(), -2);
        // assertEquals(pq.poll(), 1);
        // assertEquals(pq.poll(), 2);
        // assertEquals(pq.poll(), 5);
        // assertEquals(pq.poll(), 7);
        // assertEquals(pq.poll(), 3);
        // assertEquals(pq.poll(), 6);
        // assertEquals(pq.poll(), 4);

        assertEquals(pq.poll(), 1);
        assertEquals(pq.poll(), 1);
        assertEquals(pq.poll(), 1);
        assertEquals(pq.poll(), 2);
        assertEquals(pq.poll(), 2);
        assertEquals(pq.poll(), 3);
        assertEquals(pq.poll(), 4);
    }
}

let bht = new PriorityQueueTest();
bht.genericTest();