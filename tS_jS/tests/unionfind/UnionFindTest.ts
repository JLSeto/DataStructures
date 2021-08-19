import { UnionFind } from "../../src/unionfind/UnionFind";
import { assertEquals }     from "../commonHelpers"

class UnionFindTest
{
    numIslands(grid: string[][]) : number
    {
        let size = grid.length * grid[0].length;
        let uF = new UnionFind(size);

        for(let i = 0; i < grid.length; i++)
        {
            for(let j = 0; j < grid[0].length; j++)
            {
                if(grid[i][j] == "1")
                {
                    //check left right up down for a connected island
                    // row * i + j
                    let center  = grid[0].length * i + j;
                    let left    = grid[0].length * i + j - 1;
                    let right   = grid[0].length * i + j + 1;
                    let up      = grid[0].length * (i - 1) + j;
                    let down    = grid[0].length * (i + 1) + j;
                    
                    if(j - 1 >= 0 && grid[i][j - 1] == "1")
                    {
                        uF.unify(left, center);
                    }
                    
                    if(j + 1 < grid[0].length && grid[i][j + 1] == "1")
                    {
                        uF.unify(right, center);
                    }
                    
                    if(i - 1 >= 0 && grid[i - 1][j] == "1")
                    {
                        uF.unify(up, center);
                    }
                    
                    if(i + 1 < grid.length && grid[i + 1][j] == "1")
                    {
                        uF.unify(down, center);
                    }
                }
            }
        }

        let new_set = new Set();
        for(let i = 0; i < grid.length; i++)
        {
            for(let j = 0; j < grid[0].length; j++)
            {
                if(grid[i][j] == "1")
                {
                    let centerCoord = i*grid[0].length + j;
                    let x = uF.find(centerCoord);
                    if(!new_set.has(x))
                    {
                        new_set.add(x);
                    }
                }
            }
        }
        
        return new_set.size;
    }

}

let grid = 
[
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

let grid2 = 
[
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

let test = new UnionFindTest();

assertEquals(test.numIslands(grid), 1);
assertEquals(test.numIslands(grid2), 3);