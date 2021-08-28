export class DynamicArray<T> implements Iterable<any>
{
    private arr: T[];

    //length user thinks the array is
    private len: number = 0; 

    //Actual Array Size
    private capacity: number = 0;

    //Iterator
    private iterIdx: number = 0;

    constructor(capacity?: number)
    {
        if(capacity == undefined)
        {
            capacity = 16;
        }
        else if(capacity < 0)
        {
            throw new Error("Illegal Capacity: " + capacity);
        }

        this.arr = new Array<T>(capacity);
        this.capacity = capacity;
    }

    public size() : number
    {
        return this.len;
    }

    public isEmpty() : boolean
    {
        return (this.len == 0); //based length user thinks array is
    }

    public get(index: number) : T
    {
        if(index >= this.len || index < 0)
        {
            throw new Error("IndexOutOfBoundsException");
        }

        return this.arr[index];
    }

    public set(index : number, elem : T) : void
    {
        if(index < 0 || index >= this.len)
        {
            throw new Error("IndexOutOfBoundsException");
        }

        this.arr[index] = elem;
    }

    public clear() : void
    {
        for(let i = 0; i < this.len; i++)
        {
            this.arr[i] = null as any;
        }
    }

    public add(elem : T) : void
    {
        if(this.len + 1 >= this.capacity)
        {
            if(this.capacity == 0)
            {
                this.capacity = 1;
            }
            else
            {
                this.capacity *= 2;
            }

            let new_arr: T[] = new Array(this.capacity);

            for(let i = 0; i < this.len; i++)
            {
                new_arr[i] = this.arr[i];
            }

            this.arr = new_arr;
        }

        this.arr[this.len++] = elem;
    }

    public removeAt(rm_index : number) : T
    {
        if(rm_index < 0 || rm_index >= this.len)
        {
            throw new Error("IndexOutOfBoundsException");
        }

        let data: T = this.arr[rm_index];
        let new_arr: T[] = new Array<T>(this.len - 1);

        for(let i = 0, j = 0; i < this.len; i++, j++)
        {
            if(i == rm_index)
            {
                j--; //Skip over rm_index by fixing j temporarily
            }
            else
            {
                new_arr[j] = this.arr[i];
            }
        }

        this.arr = new_arr;
        this.capacity = --this.len;

        return data;
    }

    public remove(obj : T |null) : boolean
    {
        let index = this.indexOf(obj);

        if(index == -1)
        {
            return false;
        }
        else
        {
            this.removeAt(index);
            return true;
        }
    }

    public indexOf(obj : T | null) : number
    {
        for(let i = 0; i < this.len; i++)
        {
            if(obj == this.arr[i])
            {
                return i;
            }
        }

        return -1;
    }

    public contains(obj : T | null) : boolean
    {
        return (this.indexOf(obj) != -1);
    }

    //Iterator
    public [Symbol.iterator]() 
    {
        this.iterIdx = 0;
        return { next: this.next };
    }

    private next = () =>
    {
        let done = false;

        if(done)
        {
            return {done: done, value: null};
        }

        if(this.iterIdx == this.len)
        {
            done = true;
            this.iterIdx = 0;
            return {done: done, value: null};
        }

        const value = this.arr[this.iterIdx];
        this.iterIdx++;
        return {done: false, value};
    }

    public arrayString() : string
    {
        if(this.len == 0)
        {
            return "[]";
        }
        else
        {
            let sb = "";

            for(let i = 0; i < this.len - 1; i++)
            {
                sb += this.arr[i] + ", ";
            }

            sb += this.arr[this.len - 1] + "]";

            return sb;
        }
    }
}