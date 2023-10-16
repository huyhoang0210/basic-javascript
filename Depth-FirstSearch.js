const graph = {
    A: ['B','C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
  };

  function dfs(graph, start) {
    let visited = [];
    let stack = [start];

    while (stack.length > 0) {
      let current = stack.pop();
      if (!visited.includes(current)) {
        visited.push(current);
        stack.push(...graph[current]);
      }
    }

    return visited;
  }

  let result = dfs(graph, 'A');
  console.log(result);
