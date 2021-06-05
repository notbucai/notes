/*
 * @Author: bucai
 * @Date: 2021-06-04 09:31:36
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 08:59:11
 * @Description: 图
 */

class Graph {

  constructor() {
    // 顶点
    this.vertices = new Set();
    // 边
    this.adjList = new Map();
  }

  addVertex (v) {
    this.vertices.add(v);
    this.adjList.set(v, new Set());
  }

  addEdge (v1, v2) {

    const verticesArray = Array.from(this.vertices.values())

    const tv1 = verticesArray.find(v => v === v1);
    const tv2 = verticesArray.find(v => v === v2);

    if (!tv1 || !tv2) {
      throw new Error(`no find vertex, please confirm (${v1}, ${v2}) vertex exist.`)
    }

    this.adjList
      .get(tv1)
      .add(tv2);

    this.adjList
      .get(tv2)
      .add(tv1);

  }
  // 广度优先
  bfs (v, callback) {
    // 未遍历
    // 已遍历
    const status = {};

    const queue = [];

    queue.push(v);

    while (queue.length) {

      const nV = queue.shift()

      /**@type {Set} */
      const adjList = this.adjList.get(nV);

      const aList = Array.from(adjList.values());

      aList.forEach(fv => {
        if (!status[fv]) {
          status[fv] = 1;
          queue.push(fv);
        }
      });

      status[nV] = 2;
      if (callback) {
        callback(nV);
      }
    }
  }

  // 深度优先
  dfs (v, callback) {
    const status = {};
    const dfsVisited = (v) => {
      status[v] = 1;
      /**@type {Set} */
      const adjList = this.adjList.get(v);
      const adjArray = Array.from(adjList);
      adjArray.forEach(tv => {
        if (!status[tv]) {
          dfsVisited(tv);
        }
      });
      status[v] = 2;
      callback(v);
    }
    dfsVisited(v);
  }

  // 广度优先 距离
  bfs_d (v, callback) {
    // 未遍历
    // 已遍历
    const status = {};

    const queue = [];

    // 回溯点
    const pred = {};
    // 距离
    const d = {};

    queue.push(v);

    while (queue.length) {
      // 当前点
      const nV = queue.shift()

      /**@type {Set} */
      const adjList = this.adjList.get(nV);

      const aList = Array.from(adjList.values());

      aList.forEach(fv => {
        if (!status[fv]) {
          status[fv] = 1;
          queue.push(fv);
          pred[fv] = nV;
          d[fv] = (d[nV] || 0) + 1;
        }
      });

      status[nV] = 2;
      if (callback) {
        callback(nV);
      }
    }
    return {
      pred,
      d
    }
  }

  // 最短路径 v1 -> v2
  bfs_short (v1, v2) {

    const { d, pred } = this.bfs_d(v1);

    let c = v2;

    let route = [c];

    do {

      c = pred[c];
      if (c) {
        route.unshift(c);
      }

    } while (c);

    return {
      route,
      d: d[v2]
    };
  }

}

const g = new Graph();


g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'E');
g.addEdge('E', 'F');

console.log('g', g);

console.log('广度搜索结果：');
g.bfs('A', console.log);
console.log('\n深度搜索结果：')
g.dfs('A', console.log);
console.log('\n广度距离搜索结果：')
const r = g.bfs_d('A', console.log);
console.log('r', r);

console.log('\n最短路径结果：')
const short = g.bfs_short('A', 'E');
console.log('short', short);
