// https://structy.net/problems/has-path

const hasPath = (graph, src, dst) => {
    // todo
    // return isBfsPath(graph, src, dst)
    return isDfsPath(graph, src, dst)
};

const isBfsPath = (graph, src, dst) => {
    const queue = [src];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        for (let neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
    return false
}

const isDfsPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbour of graph[src]) {
        if (isDfsPath(graph, neighbour, dst)) return true
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph, 'f', 'k')); // true