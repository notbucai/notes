class Skack {

  constructor() {
    this.skack = [];
  }

  // 入栈
  push(data) {
    return this.skack.push(data);
  }
  // 出栈
  pop() {
    return this.skack.pop();
  }
  
  toString() {
    return `[${this.skack.join(',')}]`;
  }
}

(function () {
  const skack = new Skack();
  skack.push(1);
  skack.push(12);
  skack.push(123);

  /**
  [1,12,123]
  [1,12]
  [1]
  []
   */
  console.log(skack.toString());
  skack.pop();
  console.log(skack.toString());
  skack.pop();
  console.log(skack.toString());
  skack.pop();
  console.log(skack.toString());

})();