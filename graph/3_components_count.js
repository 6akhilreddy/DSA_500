// https://structy.net/problems/connected-components-count

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    // if(dfs(graph, Number(node), visited)) count++
    if (!visited.has(Number(node))) {
      bfs(graph, node, visited);
      count++;
    }
  }
  return count;
};

const dfs = (graph, src, visited) => {
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbour of graph[src]) {
    dfs(graph, neighbour, visited);
  }

  return true;
};

const bfs = (graph, src, visited) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!visited.has(current)) {
      visited.add(current);
      for (let neighbour of graph[current]) {
        queue.push(neighbour);
      }
    }
  }
};
