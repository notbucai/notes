/*
 * @Author: bucai
 * @Date: 2021-05-21 09:48:19
 * @LastEditors: bucai
 * @LastEditTime: 2021-05-21 09:59:20
 * @Description: 优先级队列
 */

class QueryElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  toString () {
    return JSON.stringify(this, null, 2);
  }
}

class Queue {

  constructor() {
    this.queue = [];
  }

  // 入队
  push (data, priority = 0) {
    const element = new QueryElement(data, priority);

    let elementPushIndex = this.queue.findIndex(item => element.priority > item.priority);

    if (elementPushIndex === -1) {
      elementPushIndex = this.queue.length;
    }

    this.queue.splice(elementPushIndex, 0, element);
  }
  // 出队
  shift () {
    return this.queue.shift();
  }

  toString () {
    return `[${this.queue.join(',')}]\n`;
  }
}

(function () {
  const queue = new Queue();
  queue.push(4, 2);
  queue.push(5, 11);
  queue.push(2);
  queue.push(3, 1);
  queue.push(104, 0);
  queue.push(103, 0);
  queue.push(102, 0);
  queue.push(101, 0);

  /**
    [1,12,123]
    [12,123]
    [123]
    []
   */
  console.log(queue.toString());
  queue.shift();
  console.log(queue.toString());

})();