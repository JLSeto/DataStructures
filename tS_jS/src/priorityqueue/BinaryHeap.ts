
export class BinaryHeap<T>
{
    //# of Elements currently inside the heap
    private heapSize: number = 0;

    //Dynamic List to track elements inside the heap
    private heap: T[];


    constructor(arr: Array<T>)
    {
        this.heap = new Array<T>();
    }
}