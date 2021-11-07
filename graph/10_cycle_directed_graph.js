const dfs = (graph, node, visited, dfsVisited) => {
    visited.add(node)
    dfsVisited.add(node);
    for(let neighbour of graph[node]){
        if(!visited.has(neighbour)){
            if(dfs(graph, neighbour, visited, dfsVisited)) return 1
        }else if(dfsVisited.has(neighbour)) return 1
    }
    dfsVisited.delete(node);
    return 0;

}


// const getGraph = (edges) => {
//     const graph = {};
//     for(let edge of edges){
//         const [a, b] = edge;
//         if(!(a in graph)) graph[a] = [];
//         if(!(b in graph)) graph[b] = [];
//         graph[a].push(b);
//         graph[b].push(a);
//     }
//     return graph
// }

const isCyclic = (graph) => {
    // const graph = getGraph(edges);
    const visited = new Set();
    const dfsVisited = new Set();
    for(let node in graph){
        if(!visited.has(Number(node))){
            console.log(dfsVisited)
            if(dfs(graph, node, visited, dfsVisited)) return 1
            
        }
    }
    return 0
}

const graph = {
    1:[2],
    2:[3],
    3:[4,6],
    4:[5],
    5:[],
    6:[5],
    7:[2,8],
    8:[9],
    9:[7]
}

console.log(isCyclic(graph))