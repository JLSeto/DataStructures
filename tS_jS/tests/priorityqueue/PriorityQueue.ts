import { PQueue } from "../../src/priorityqueue/PriorityQueue";
import { assertEquals }     from "../commonHelpers"

class PriorityQueueTest
{
    genericTest() : void
    {
        let pq: PQueue<number> = new PQueue([4,1,1,1,2,2,3]);

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