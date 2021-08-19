
export class UnionFind
{
    // The number of elements in this union find
    private sizeOf: number = 0;

    // Used to track the size of each of the component
    private sz: number[] = new Array<number>();

    // id[i] points to the parent of i, if id[i] = i then i is a root node
    private id: number[] = new Array<number>();

    // Tracks the number of components in the union find
    private numComponents: number = 0;

    constructor(size: number)
    {
        if(size <= 0)
        {
            throw new Error("Size <= 0 is not allowed");
        }

        this.sizeOf = this.numComponents = size;

        this.id = new Array<number>(size);
        this.sz = new Array<number>(size);

        for(let i = 0; i < size; i++)
        {
            this.id[i] = i; // Link each not to itself
            this.sz[i] = 1; // Each component is originally of size one
        }
    }

    // Find which component/set 'p' belongs to, takes amortized constant time.
    // Compress the path.
    public find(p: number) : number
    {
        let root = p;
        while(root != this.id[root])
        {
            root = this.id[root];
        }

        //Compress the path leading to the root.  
        // This is known as "path compression" and gives amortized time complexity
        while(p != root)
        {
            let next = this.id[p];
            this.id[p] = root;
            p = next;
        }

        return root;
    }

    // Unify the components/sets containing elements 'p' and 'q'
    public unify(p : number, q : number) : void
    {
        let root1 = this.find(p);
        let root2 = this.find(q);

        //merge smaller set into larger set. Increase the size
        if(this.sz[root1] < this.sz[root2])
        {
            this.id[root1] = root2;
            this.sz[root2] += this.sz[root1];
        }
        else
        {
            this.id[root2] = root1;
            this.sz[root1] += this.sz[root2];
        }
    }

    // Return whether or not the elements 'p' and 'q' are in the same component/set
    public connected(p: number, q: number) : boolean
    {
        let rootp = this.find(p);
        let rootq = this.find(q);

        return rootp == rootq;
    }

    // Return the number of elements in the UnionFInd/Disjoint set
    public size() : number
    {
        return this.sizeOf;
    }

    // Returns the number of remaining components/sets
    public components() : number
    {
        return this.numComponents;
    }
}