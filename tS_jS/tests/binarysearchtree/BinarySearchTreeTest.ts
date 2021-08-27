import { assert } from "console";
import { BinarySearchTree, TreeTraversalOrder } from "../../src/binarysearchtree/BinarySearchTree";
import { assertEquals }     from "../commonHelpers"

class BinarySearchTreeTest
{
    constructor(){}

    public genericTest()
    {
        let bst = new BinarySearchTree();
        
        let testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6]; 

        for(let i = 0; i < testVals.length; i++)
        {
            bst.add(testVals[i]);
        }

        assert(bst.contains(7) == true);
        assert(bst.contains(25) == true);
        assert(bst.contains(1) == false);

        this.preOrderTest();
        this.inOrderTest();
        this.postOrderTest();
        this.levelOrderTest();

    }

    private preOrderTest()
    {
        let bst = new BinarySearchTree();
        let testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6]; 

        for(let i = 0; i < testVals.length; i++)
        {
            bst.add(testVals[i]);
        }
        
        let x = bst.preOrderTraversal();
        assert(x.next().value == 7);
        assert(x.next().value == 5);
        assert(x.next().value == 4);
        assert(x.next().value == 2);
        assert(x.next().value == 6);
        assert(x.next().value == 20);
        assert(x.next().value == 15);
        assert(x.next().value == 10);
        assert(x.next().value == 33);
        assert(x.next().value == 25);
    }

    private inOrderTest()
    {
        let bst = new BinarySearchTree();
        let testVals = [7, 20, 5, 15, 10, 4, 4, 33, 2, 25, 6]; 

        for(let i = 0; i < testVals.length; i++)
        {
            bst.add(testVals[i]);
        }

        let x = bst.inOrderTraversal();
        assert(x.next().value == 2);
        assert(x.next().value == 4);
        assert(x.next().value == 5);
        assert(x.next().value == 6);
        assert(x.next().value == 7);
        assert(x.next().value == 10);
        assert(x.next().value == 15);
        assert(x.next().value == 20);
        assert(x.next().value == 25);
        assert(x.next().value == 33);
    }

    private postOrderTest()
    {
        let bst = new BinarySearchTree();
        let testVals = [11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19];

        for(let i = 0; i < testVals.length; i++)
        {
            bst.add(testVals[i]);
        }
        let x = bst.postOrderTraversal();
        
        assert(x.next().value == 1);
        assert(x.next().value == 5);
        assert(x.next().value == 3);
        assert(x.next().value == 8);
        assert(x.next().value == 6);
        assert(x.next().value == 12);
        assert(x.next().value == 14);
        assert(x.next().value == 13);
        assert(x.next().value == 19);
        assert(x.next().value == 17);
        assert(x.next().value == 15);
        assert(x.next().value == 11);
    }

    private levelOrderTest()
    {
        let bst = new BinarySearchTree();
        let testVals = [11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19];

        for(let i = 0; i < testVals.length; i++)
        {
            bst.add(testVals[i]);
        }
        let x = bst.levelOrderTraversal();
        assert(x.next().value == 11);
        assert(x.next().value == 6);
        assert(x.next().value == 15);
        assert(x.next().value == 3);
        assert(x.next().value == 8);
        assert(x.next().value == 13);
        assert(x.next().value == 17);
        assert(x.next().value == 1);
        assert(x.next().value == 5);
        assert(x.next().value == 12);
        assert(x.next().value == 14);
        assert(x.next().value == 19);
    }
}

let bstt = new BinarySearchTreeTest();

bstt.genericTest();