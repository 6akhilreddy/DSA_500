// https://leetcode.com/problems/is-graph-bipartite/
// https://www.youtube.com/watch?v=nbgaEu-pvkU&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=10


var isBipartite = function(graph) {
    const visited = new Array(graph.length).fill(-1)
    for(let node in graph){
       if(visited[node] === -1){
        //    if(!bfs(graph, node, visited)) return false
        if(!dfs(graph, node, -1, visited)) return false
       }
    }
    return true;
};

const bfs = (graph, node, visited) => {
   const queue = [node];
    visited[node] = 0;
    while(queue.length > 0){
        const current = queue.shift();
        for(let neighbour of graph[current]){
            if(visited[neighbour] === -1){
                if(visited[current] === 0) visited[neighbour] = 1;
                else visited[neighbour] = 0;
                queue.push(neighbour)
            }else if(visited[current] === visited[neighbour]){
                return false
            }
        }
    }
    return true
}

const dfs = (graph, node, parent, visited) => {
    if(visited[node] === -1){
        visited[node] = 1 - visited[parent]
        for(let neighbour of graph[node]){
            if(!dfs(graph, neighbour, node, visited)) return false
        }
    }else if(visited[node] === visited[parent]){
        return false
    }
    return true
}
