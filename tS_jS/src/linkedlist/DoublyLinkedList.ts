class Node<T>
{
    public data?: T | null;
    public next?: Node<T> | null;
    public prev?: Node<T> | null;
    
    constructor(data : T, prev?: Node<T> | null, next?: Node<T> | null)
    {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    toString() : String
    {
        return String(this.data);
    }
}

export class DoublyLinkedList<T> implements Iterable<any>
{
    private size: number = 0;
    private head?: Node<T> | null;
    private tail?: Node<T> | null;

    //Iterator variables
    public iter?   : Node<T> | null;
    private counter: number = 0;

    constructor(){ }

    //Empty the linked list O(n)
    public clear() : void 
    {
        let trav: Node<T> | null | undefined = this.head;

        while (trav != null)
        {
            let next: Node<T> | null | undefined = trav.next;
            trav.prev = trav.next = null;
            trav.data = null as any;
            trav = next;
        }
        this.head = this.tail = this.iter = trav = null;
        this.size = 0;
    }

    //Return the size of the linked list O(1)
    public sizeOf() : number
    {
        return this.size;
    }

    //Is the linked list empty? O(1)
    public isEmpty() : boolean
    {
        return (this.size == 0);
    }

    //Add a node to the tail of the linked list O(1)
    public addLast(elem : T) : void
    {
        if(this.isEmpty())
        {
            this.head = this.tail = this.iter = new Node<T>(elem, null, null);
        }
        else
        {
            this.tail!.next = new Node<T>(elem,this.tail, null);
            this.tail = this.tail?.next;
        }
        this.size++;
    }
    
    //Add an element to the beginning of the linked list O(1)
    public addFirst(elem : T) : void
    {
        if(this.isEmpty())
        {
            this.head = this.tail = this.iter = new Node<T>(elem, null, null);
        }
        else
        {
            this.head!.prev = new Node(elem, null, this.head);
            this.head = this.iter =  this.head?.prev;
        }
        this.size++;
    }

    //Add an element at a specified index
    public addAt(index: number, data : T) : void
    {
        if(index < 0)
        {
            throw new Error("Illegal Index");
        }

        if(index == this.size)
        {
            this.addLast(data);
            return;
        }
        
        if(index == 0)
        {
            this.addFirst(data);
            return;
        }

        let temp = this.head;
        for(let i = 0; i < index - 1; i++)
        {
            temp = temp?.next;
        }

        let newNode = new Node<T>(data, temp, temp?.next);
        temp!.next!.prev = newNode;
        temp!.next = newNode;
        this.size++;
    }

    //Check the value of the first node if it exists O(1)
    public peekFirst() : T | null | undefined
    {
        if(this.isEmpty())
        {
            throw new Error("Empty List");
        }

        return this.head?.data;
    }

    //Check the value of the last node if it exists O(1)
    public peekLast() : T | null | undefined
    {
        if(this.isEmpty())
        {
            throw new Error("Empty list");
        }

        return this.tail?.data;
    }

    //Remove the first value at the head of the linked list O(1)
    public removeFirst() : T | null | undefined
    {
        if(this.isEmpty())
        {
            throw new Error("Empty list");
        }

        let data = this.head?.data;
        this.head = this.iter = this.head?.next;
        this.size--;

        if(this.isEmpty())
        {
            this.tail = null; //set tail to null if empty
        }
        else
        {
            this.head!.prev = this.iter!.prev = null;
        }

        return data;
    }

    //Remove the last value at the tail of the linked list O(1)
    public removeLast() : T | null | undefined
    {
        if(this.isEmpty())
        {
            throw new Error("Empty list");
        }

        let data = this.tail?.data;
        this.tail = this.tail?.prev;
        this.size--;

        if(this.isEmpty())
        {
            this.head = this.iter = null;
        }
        else
        {
            this.tail!.next = null;
        }

        return data;
    }

    //Remove an arbitrary node from the linked list, O(1)
    private removeNode(node?: Node<T> | null) : T | null | undefined
    {
        if(node?.prev == null)
        {
            return this.removeFirst();
        }

        if(node.next == null)
        {
            return this.removeLast();
        }

        //Make the pointers of adjacent nodes skip over 'node'
        node.next.prev = node.prev;
        node.prev.next = node.next;

        //Temporarily store the data we want to return
        let data = node.data;

        //memory cleanup
        node.data = null;
        node = node.prev = node.next = null;
        this.size--;

        return data;
    }

    //Remove a node at a particular index
    public removeAt(index : number) : T | null | undefined
    {
        if(index < 0 || index >= this.size)
        {
            throw new Error("Illegal Argument Exception");
        }

        let i;
        let trav;

        if(index < this.size / 2) //Search from the front of list
        {
            for(i = 0, trav = this.head; i != index; i++)
            {
                trav = trav?.next;
            }
        }
        else //Search from the back of the list
        {
            for(i = this.size - 1, trav = this.tail; i != index; i--)
            {
                trav =  trav?.prev; 
            }
        }

        return this.removeNode(trav);
    }

    //Remove a particular value in the linked list, O(n)
    public remove(obj : Object) : boolean
    {
        let trav = this.head;

        //Support searching for null
        if(obj == null)
        {
            for(trav = this.head; trav != null; trav = trav.next)
            {
                if(trav.data == null)
                {
                    this.removeNode(trav);
                    return true;
                }
            }
        }
        else
        {
            for(trav = this.head; trav != null; trav = trav.next)
            {
                if(obj == trav.data)
                {
                    this.removeNode(trav);
                    return true;
                }
            }
        }

        return false;
    }

    //Find the index of a particular value in the linked list, O(n)
    public indexOf(obj : Object) : number
    {
        let index = 0;
        let trav = this.head;

        //Support searching for null
        if(obj == null)
        {
            for(trav = this.head; trav != null; trav = trav.next, index++)
            {
                if(trav.data == null)
                {
                    return index;
                }
            }
        }
        else
        {
            for(trav = this.head; trav != null; trav = trav.next, index++)
            {
                if(obj == trav.data)
                {
                    return index;
                }
            }
        }

        return -1;
    }

    // Check is a value is contained within the linked list
    public contains(obj : Object) : boolean
    {
        return (this.indexOf(obj) != -1);
    }

    public toString() : string
    {
        let trav = this.head;
        let str = "[ ";
        while(trav != null)
        {
            str += trav.data;

            if(trav.next != null)
            {
                str += ", ";
            }
            trav = trav.next;
        }

        str += " ]";

        return str;
    }

    //Iterator
    public [Symbol.iterator]() 
    {
        this.iter = this.head;
        return { next: this.next };
    }

    private next = () =>
    {
        let done = false;

        if(done)
        {
            return {done: done, value: null};
        }

        if(this.iter == null)
        {
            done = true;
            this.iter = this.head;
            return {done: done, value: null};
        }

        const value = this.iter.data;
        this.iter = this.iter?.next;
        return {done: false, value};
    }
}
