// https://structy.net/problems/undirected-path
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = getGraph(edges)
    const visited = new Set();
    // return isBfspath(graph, nodeA, nodeB, visited)
    return isDfsPath(graph, nodeA, nodeB, visited)
};

const isBfspath = (graph, nodeA, nodeB, visited) => {
    const queue = [nodeA];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === nodeB) return true
        if (!visited.has(current)) {
            visited.add(current)
            for (let neighbour of graph[current]) {
                queue.push(neighbour)
            }
        }
    }
    return false
}

const isDfsPath = (graph, nodeA, nodeB, visited) => {
    if (nodeA === nodeB) return true;
    if (visited.has(nodeA)) return false;

    visited.add(nodeA);
    for (let neighbour of graph[nodeA]) {
        if (isDfsPath(graph, neighbour, nodeB, visited)) return true
    }

    return false
}

const getGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

undirectedPath(edges, 'l', 'j'); // -> true