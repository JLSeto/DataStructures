
export class BinaryHeap<T>
{
    // # of Elements currently inside the heap
    private heapSize: number = 0;

    // Dynamic List to track elements inside the heap
    private heap: T[];

    constructor(arr: Array<T>)
    {
        this.heap = new Array<T>(arr.length);

        // Place all elements in heap
        for(let i = 0; i < arr.length; i++)
        {
            this.heap.push(arr[i]);
        }

        // Heapify process O(n)
        for(let i = Math.max(0, (arr.length / 2) - 1); i >= 0; i--)
        {
            //sink
        }
    }

    // Perform bottom up node swim O(log(n))
    private swim(k : number) : void
    {

    }

    // Top down node sink, O(log(n))
    private sink(k : number)
    {

    }

    // Swap two nodes. Assumes i & j are valid, O(1)
    private swap(i : number, j : number) : void
    {

    }

    // Tests if the value of node i <= node j
    // This method assumes i & j are valid indices, O(1)
    private less(i : number, j : number) : boolean
    {

    }

    // Adds an element to the priority queue, the
    // element must not be null, O(log(n))
    public add(elem : T) : void
    {

    }

    // Returns the value of the element with the lowest
    // priority in this priority queue. If the priority
    // queue is empty null is returned.
    public peek() : T 
    {

    }

    // Removes the root of the heap, O(log(n))
    public poll() : T
    {

    }

    // Removes a particular element in the heap, O(n)
    public remove(element : T) : boolean
    {

    }

    // Removes a node at particular index, O(log(n))
    private removeAt(i : number) : T 
    {

    }

    // Test if an element is in heap, O(n)
    public contains(elem : T)
    {

    }

    // Returns true/false depending on if the priority queue is empty
    public isEmpty() : boolean
    {
        
    }

    // Clears everything inside the heap, O(n)
    public clear() : void 
    {

    }

    // Return the size of the heap
    public size() : number
    {

    }

    // Recursively checks if this heap is a min heap
    // This method is just for testing purposes to make
    // sure the heap invariant is still being maintained
    // Called this method with k=0 to start at the root
    public isMinHeap(k : number) : boolean
    {

    }
}