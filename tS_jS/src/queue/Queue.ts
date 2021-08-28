import { DoublyLinkedList } from "../linkedlist/DoublyLinkedList";

export class Queue<T>
{
    private list: DoublyLinkedList<T> = new DoublyLinkedList<T>();

    constructor(){}

    offer(elem: T) : void
    {
        this.list.addLast(elem);
    }

    poll() : T | null | undefined
    {
        return this.list.removeFirst();
    }

    peek() : T | null | undefined
    {
        return this.list.peekFirst();
    }

    size() : number
    {
        return this.list.sizeOf();
    }

    isEmpty() : boolean
    {
        return this.list.isEmpty();
    }
}