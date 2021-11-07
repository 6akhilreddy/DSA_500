// https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1
// https://www.youtube.com/watch?v=Y9NFqI6Pzd4&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=9

const isCycle = (V, adj) => {
    // code here
    const visited = new Set();
    for(let nodeIdx in adj){
       if(!visited.has(nodeIdx)){
            // if(this.bfs(adj, nodeIdx, visited)) return 1;
            if(this.dfs(adj, nodeIdx, -1, visited)) return 1;
       }
    }
    
    return 0
    
}

const bfs = (adj, nodeIdx, visited) => {
    const queue = [];
    queue.push([nodeIdx, -1]);
    visited.add(nodeIdx);
    while(queue.length > 0){
        const [node, parent] = queue.shift();
        for(let neighbour of adj[Number(node)]){
             if(!visited.has(neighbour)){
                 visited.add(neighbour);
                 queue.push([neighbour, node])
             }else{
                 if(neighbour !== parent){
                     return true
                 }
             }  
        }
    }
    return false
}

const dfs = (adj, nodeIdx, parentIdx, visited) => {
    visited.add(nodeIdx)
    for(let neighbour of adj[Number(nodeIdx)]){
        if(!visited.has(neighbour)){
            if(this.dfs(adj, neighbour, nodeIdx, visited)) return true
        }else if(neighbour !== parentIdx){
            return true
        }
    }
    return false
}