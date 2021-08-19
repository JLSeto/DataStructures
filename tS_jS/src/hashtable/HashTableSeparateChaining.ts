import { DoublyLinkedList } from '../linkedlist/DoublyLinkedList';

class Key<K>
{
    key: K;

    constructor(key : K)
    {
        this.key = key;
    }

    hashCode() : number
    {
        var hash = 0;
        for (var i = 0; i < String(this.key).length; i++) 
        {
            var character = String(this.key).charCodeAt(i);
            hash = ((hash<<5)-hash)+character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}

class Entry<K, V>
{
    hash: number;
    key: Key<K>;
    value: V;

    constructor(key: K, value: V)
    {
        this.key = new Key(key);
        this.value = value;
        this.hash = this.key.hashCode();
    }

    equals(other: Entry<K, V>) : boolean
    {
        if(other.hash != this.hash)
        {
            return false;
        }
        else
        {
            return (this.key == other.key);
        }
    }

    toString() : string
    {
        return this.key + " => " + this.value;
    }
}

export class HashTableSeparateChaining<K, V> 
{
    private static readonly DEFAULT_CAPACITY    : number = 3;
    private static readonly DEFAULT_LOAD_FACTOR : number = 0.75;

    private maxLoadFactor   : number = 0;
    private capacity        : number = 0;
    private threshold       : number = 0;
    private size            : number = 0;
    private table: DoublyLinkedList<Entry<K, V>>[] = new Array<DoublyLinkedList<Entry<K, V>>>();

    constructor(capacity : number | null, maxLoadFactor : number | null)
    {
        if(capacity == null && maxLoadFactor == null)
        {
            capacity = HashTableSeparateChaining.DEFAULT_CAPACITY;
            maxLoadFactor = HashTableSeparateChaining.DEFAULT_LOAD_FACTOR;
        }
        else if(capacity != null && maxLoadFactor == null)
        {
            capacity = this.capacity;
            maxLoadFactor = HashTableSeparateChaining.DEFAULT_LOAD_FACTOR;
        }

        if(capacity != null && capacity < 0)
        {
            throw new Error("Illegal Capacity");
        }

        if(maxLoadFactor == null || maxLoadFactor <= 0 || !isFinite(maxLoadFactor))
        {
            throw new Error("Illegal maxLoadFactor");
        }

        this.maxLoadFactor = maxLoadFactor;
        this.capacity = Math.max(capacity!, HashTableSeparateChaining.DEFAULT_CAPACITY);
        this.threshold = Math.floor(this.capacity * this.maxLoadFactor);
        this.table = new Array<DoublyLinkedList<Entry<K, V>>>(this.capacity).fill(null!);
    }

    // Returns the number of elements currently inside the hash-table
    public sizeOf() : number
    {
        return this.size;
    }

    // Returns true/false depending on wether the hash-table is empty
    public isEmpty() : boolean
    {
        return this.size == 0;
    }

    // Converts a hash value to an index. Strips the negative sign
    // and places the hash value in the domain of [0, capacity)
    private normalizeIndex(keyHash : number)
    {
        return(keyHash & 0x7FFFFFFF) % this.capacity;
    }

    public clear() : void
    {
        //let e = new DoublyLinkedList<Entry<K, V>>();
        this.table.fill(null!);
        this.size = 0;
    }

    // Returns true or false depending on wether a key is in the hash table
    public hasKey(key : K) : boolean
    {
        let keyS: Key<K> = new Key(key);
        let bucketIndex = this.normalizeIndex(keyS.hashCode());
        return (this.bucketSeekEntry(bucketIndex, key) != null);
    }

    public insert(key : K, value : V) : V | null
    {
        if(key == null)
        {
            throw new Error("Null Key");
        }

        let newEntry: Entry<K, V> = new Entry<K, V>(key, value);
        let bucketIndex : number = this.normalizeIndex(newEntry.hash);
        return this.bucketInsertEntry(bucketIndex, newEntry)
    }

    private bucketInsertEntry(bucketIndex : number, entry : Entry<K, V>) : V | null
    {
        let bucket = this.table[bucketIndex];

        if(bucket == null)
        {
            this.table[bucketIndex] = bucket = new DoublyLinkedList<Entry<K, V>>();
        }

        let existentEntry = this.bucketSeekEntry(bucketIndex, entry.key.key);

        if(existentEntry == null)
        {

            this.table[bucketIndex].addLast(entry);

            if(++this.size > this.threshold)
            {
                this.resizeTable();
            }

            return null; //Use null to indicate no previous entry
        }
        else
        {
            let oldVal: V = existentEntry.value;
            existentEntry.value = entry.value;
            return oldVal;
        }
    }

    //get a key's value from the map and return the value
    public get(key : K) : V | null
    {
        if(key == null)
        {
            return null;
        }
        
        let bucketIndex = this.normalizeIndex((new Key(key)).hashCode());
        let entry: Entry<K, V> | null = this.bucketSeekEntry(bucketIndex, key);

        return (entry != null) ? entry.value : null;
    }

    private bucketSeekEntry(bucketIndex: number, key : K) : Entry<K,V> | null
    {
        if(key == null)
        {
            return null;
        }

        let bucket = this.table[bucketIndex];
        if(bucket == null)
        {
            return null;
        }
        
        for(let entry of bucket)
        {
            if(entry?.key.key == key)
            {
                return entry;
            }
        }

        return null;
    }

    //remove a key value pair using a key. returns the value
    public remove(key: K) : V | null
    {
        if(key == null)
        {
            return null;
        }

        let bucketIndex = this.normalizeIndex((new Key(key)).hashCode());
        return this.bucketRemoveEntry(bucketIndex, key);
    }

    private bucketRemoveEntry(bucketIndex : number, key : K) : V | null
    {
        let entry = this.bucketSeekEntry(bucketIndex, key);

        if(entry != null)
        {
            let links = this.table[bucketIndex];
            links.remove(entry);
            --this.size;
            return entry.value;
        }
        else
        {
            return null;
        }
    }

    private resizeTable() : void
    {
        this.capacity *= 2;
        this.threshold = Math.floor(this.capacity * this.maxLoadFactor);
        let newTable: DoublyLinkedList<Entry<K, V>>[] = new Array<DoublyLinkedList<Entry<K, V>>>(this.capacity);

        for(let i = 0; i < this.table.length; i++)
        {
            if(this.table[i] != null)
            {
                for(let entry of this.table[i])
                {
                    let bucketIndex = this.normalizeIndex(entry!.hash);
                    let bucket = newTable[bucketIndex];

                    if(bucket == null)
                    {
                        newTable[bucketIndex] = bucket = new DoublyLinkedList();
                        bucket.addLast(entry!);
                    }

                    this.table[i].clear();
                    this.table[i] = null!;
                }
            }
        }
        this.table = newTable;
    }
}