// https://structy.net/problems/largest-component
const largestComponent = (graph) => {
  // todo
  const visited = new Set();
  let output = 0;

  for (let node in graph) {
    const count = dfs(graph, node, visited);
    output = Math.max(output, count);
  }
  return output;
};

const dfs = (graph, current, visited) => {
  if (visited.has(current)) return 0;
  visited.add(current);

  let count = 1;
  for (let neighbour of graph[current]) {
    count += dfs(graph, neighbour, visited);
  }

  return count;
};
