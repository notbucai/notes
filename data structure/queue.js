class Queue {

  constructor() {
    this.queue = [];
  }

  // 入队
  push(data) {
    return this.queue.push(data);
  }
  // 出队
  shift() {
    return this.queue.shift();
  }

  toString() {
    return `[${this.queue.join(',')}]`;
  }
}

(function () {
  const queue = new Queue();
  queue.push(1);
  queue.push(12);
  queue.push(123);

  /**
    [1,12,123]
    [12,123]
    [123]
    []
   */
  console.log(queue.toString());
  queue.shift();
  console.log(queue.toString());
  queue.shift();
  console.log(queue.toString());
  queue.shift();
  console.log(queue.toString());

})();