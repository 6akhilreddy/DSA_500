// https://structy.net/problems/minimum-island
const minimumIsland = (grid) => {
  // todo
  const visited = new Set();
  let output = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const count = explore(grid, r, c, visited);
      if (count !== 0) {
        output = Math.min(count, output);
      }
    }
  }
  return output;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);

  return size;
};
