class Stack {

  constructor() {
    this.stack = [];
  }

  // 入栈
  push(data) {
    return this.stack.push(data);
  }
  // 出栈
  pop() {
    return this.stack.pop();
  }
  
  toString() {
    return `[${this.stack.join(',')}]`;
  }
}

(function () {
  const stack = new Stack();
  stack.push(1);
  stack.push(12);
  stack.push(123);

  /**
  [1,12,123]
  [1,12]
  [1]
  []
   */
  console.log(stack.toString());
  stack.pop();
  console.log(stack.toString());
  stack.pop();
  console.log(stack.toString());
  stack.pop();
  console.log(stack.toString());

})();