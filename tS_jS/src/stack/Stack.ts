import { DoublyLinkedList } from "../linkedlist/DoublyLinkedList";

export class Stack<T>
{
    private list: DoublyLinkedList<T> = new DoublyLinkedList<T>();

    constructor()
    {

    }

    //Return the # of elements in the stack
    size() : number
    {
        return this.list.sizeOf();
    }

    //Return if Stack is empty
    isEmpty() : boolean
    {
        return this.list.isEmpty();
    }

    //Push to the stack
    push(elem: T) : void
    {
        this.list.addFirst(elem);
    }

    //Pop the stack
    pop() : T | null | undefined
    {
        return this.list.removeFirst();
    }

    peek() : T | null | undefined
    {
        return this.list.peekFirst();
    }
}