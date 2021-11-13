// https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
// https://www.youtube.com/watch?v=bLGZhJlt4y0
class Solution {
    findPath(m,n){
        //code here
        const ans = [];
        const visited = new Set();
        if(m[0][0] === 1 && m[n-1][n-1] === 1) this.backTrackPath(m, n, 0, 0, '', visited, ans)
        else return []
        return ans
    }
    
    backTrackPath(grid, len, row, col, move, visited, ans){
        if(row === len-1 && col === len-1){
            ans.push(move);
            return
        }
        
        const rowInbounds = row >= 0 && row <len;
        const colInbounds = col >=0 && col<len;
        
        if(!rowInbounds || !colInbounds) return;
        
        if(grid[row][col] === 0) return;
        
        const pos = row+','+col;
        if(visited.has(pos)) return;
        
        visited.add(pos);
        
        this.backTrackPath(grid, len, row+1, col, move+'D', visited, ans);
        this.backTrackPath(grid, len, row, col-1, move+'L', visited, ans);
        this.backTrackPath(grid, len, row, col+1, move+'R', visited, ans);
        this.backTrackPath(grid, len, row-1, col, move+'U', visited, ans);
        
        visited.delete(pos);
    }
}

