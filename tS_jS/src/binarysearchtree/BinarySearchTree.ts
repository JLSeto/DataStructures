export enum TreeTraversalOrder
{
    PRE_ORDER = 0,
    IN_ORDER,
    POST_ORDER,
    LEVEL_ORDER
}

class Node<T>
{
    public data : T              = null as any;
    public left : Node<T> | null = null;
    public right: Node<T> | null = null;

    constructor(left: Node<T> | null, right: Node<T> | null, elem: T)
    {
        this.data  = elem;
        this.left  = left;
        this.right = right;
    }
}

function compareTo(elem: any, data: any) : number
{
    if(elem > data)
    {
        return 1;
    }
    else if(data > elem)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}

export class BinarySearchTree<T>
{
    //Track the number of nodes in the BST
    private nodeCount: number = 0;

    //This BST is a rooted tree so we maintain a handle on the root node
    public root: Node<T> | null = null;

    constructor(){}

    public isEmpty() : boolean
    {
        return(this.nodeCount == 0);
    }

    public size() : number
    {
        return this.nodeCount;
    }

    //Add an element to the binary tree. 
    //Return true if successfully inserted
    public add(elem: T) : boolean
    {
        //Check if element already exist
        if(this.contains(elem))
        {
            return false;
        }
        else
        {
            this.root = this.addHelper(this.root, elem);
            this.nodeCount++;
            return true;
        }
    }

    //Private method to recursively add a value in the binary tree
    private addHelper(node: Node<T> | null, elem: T) : Node<T> | null
    {
        //Base Case: found a leaf node
        if(node == null)
        {
            node = new Node(null, null, elem);
        }
        else
        {
            //Pick subtree to insert element
            if(this.compareTo(elem, node.data) < 0)
            {
                node.left = this.addHelper(node.left, elem);
            }
            else
            {
                node.right = this.addHelper(node.right, elem);
            }
        }

        return node;
    }

    //Remove a value from this binary tree if it exists, O(n)
    public remove(elem : T) : boolean
    {
        if(this.contains(elem))
        {
            this.root = this.removeHelper(this.root, elem);
            this.nodeCount--;
            return true;
        }

        return false;
    }

    private removeHelper(node: Node<T> | null, elem : T) : Node<T> | null
    {
        //Base Case
        if(node == null)
        {
            return null;
        }

        let cmp = this.compareTo(elem, node.data);

        //Dig Left
        if(cmp < 0)
        {
            node.left = this.removeHelper(node.left, elem);
        }
        //Dig right
        else if(cmp > 0)
        {
            node.right = this.removeHelper(node.right, elem);
        }
        //Found Node
        else
        {
            if(node.left == null)
            {
                return node.right;
            }
            else if(node.right == null)
            {
                return node.left;
            }
            else
            {
                //Find the leftmost node in the right subtree (min)
                let tmp = this.findMin(node.right);

                //Find the rightmost node in the left subtree (min)
                // let tmp = this.findMax(node.left);
                
                //Swap the data
                node.data = tmp.data;

                //Go into the right subtree and remove the leftmost node
                //we found and swapped data with.
                //Prevents having 2 nodes in the tree with same value
                node.right = this.removeHelper(node.right, tmp.data);

                //For largest node in left subtree
                // node.left = this.removeHelper(node.left, tmp.data);
            }
        }

        return node;
    }

    private findMin(node: Node<T>) : Node<T>
    {
        while(node.left != null)
        {
            node = node.left;
        }

        return node;
    }

    private findMax(node: Node<T>) : Node<T>
    {
        while(node.right != null)
        {
            node = node.right;
        }

        return node;
    }

    //Checks if element exists in the tree and returns true if it does
    public contains(elem: T) : boolean
    {
        return this.containsHelper(this.root, elem);
    }

    //Private recursive method to find an element in the tree
    private containsHelper(node : Node<T> | null, elem : T) : boolean
    {
        //Base Case: Reached Bottom - Value not Found
        if(node == null)
        {
            return false;
        }

        let cmp = compareTo(elem, node.data);

        //Dig into the left subtree because the value we're looking for is smaller
        //than the current value
        if(cmp < 0)
        {
            return this.containsHelper(node.left, elem);
        }
        //Dig into the right subtree because the value we're looking for
        //is greater than the current value
        else if(cmp > 0)
        {
            return this.containsHelper(node.right, elem);
        }
        //elem == node.data so return true
        else
        {
            return true;
        }
    }

    public height() : number
    {
        return this.heightHelper(this.root);
    }

    private heightHelper(node : Node<T> | null) : number
    {
        if(node == null)
        {
            return 0;
        }
        else
        {
            return Math.max(this.heightHelper(node.left), this.heightHelper(node.right)) + 1;
        }
    }

    private compareTo(elem: T, elem2: T) : number
    {
        if(elem == elem2)
        {
            return 0;
        }
        else if(elem > elem2)
        {
            return 1;
        }
        else
        {
            return -1;
        }
    }

    public * preOrderTraversal()
    {
        let stack = new Array();
        let expectedNodeCount = this.nodeCount;

        stack.push(this.root);

        while(stack.length > 0)
        {
            if(expectedNodeCount != this.nodeCount)
            {
                throw new Error("ConcurrentModificationException");
            }

            let node = stack.pop();

            if(node.right != null)
            {
                stack.push(node.right);
            }

            if(node.left != null)
            {
                stack.push(node.left);
            }

            yield node.data;
        }
    }

    public * inOrderTraversal()
    {
        let stack = new Array();
        let expectedNodeCount = this.nodeCount;

        stack.push(this.root);

        let trav = this.root;

        while(stack.length > 0)
        {
            if(expectedNodeCount != this.nodeCount)
            {
                throw new Error("ConcurrentModificationException");
            }

            //Dig Left
            while(trav != null && trav.left != null)
            {
                stack.push(trav.left);
                trav = trav.left;
            }

            let node = stack.pop();

            if(node.right != null)
            {
                stack.push(node.right);
                trav = node.right;
            }

            yield node.data;
        }
    }

    public * postOrderTraversal()
    {
        let stack1 = new Array();
        let stack2 = new Array();

        let expectedNodeCount = this.nodeCount;

        stack1.push(this.root);

        while(stack1.length > 0)
        {
            let node = stack1.pop();
            
            if(node != null)
            {
                stack2.push(node);
                if(node.left != null)
                {
                    stack1.push(node.left);
                }

                if(node.right != null)
                {
                    stack1.push(node.right);
                }
            }
        }

        while(stack2.length > 0)
        {
            if(expectedNodeCount != this.nodeCount)
            {
                throw new Error("ConcurrentModificationException");
            }

            yield stack2.pop().data;
        }
    }

    public * levelOrderTraversal()
    {
        let queue = new Array();

        let expectedNodeCount = this.nodeCount;

        queue.push(this.root);

        while(queue.length > 0)
        {
            if(expectedNodeCount != this.nodeCount)
            {
                throw new Error("ConcurrentModificationException");
            }

            let node = queue.shift();

            if(node.left != null)
            {
                queue.push(node.left);
            }

            if(node.right != null)
            {
                queue.push(node.right);
            }

            yield node.data;
        }

    }
}
