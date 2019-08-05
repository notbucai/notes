## 继承与原型链
  > 详情 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)  
  > 原形链的顶端是 `null` 也就是`Object`原型对象的 `__proto__` 为 null 即为顶层 
  > 例： `new String("")` 的`__proto__` 即 `String` 而 String`__proto__` 为 Object 而 Object`__proto__` 为 `null`  
  ### 基于原型继承：
  ```
  function A(){}
  function B(){}
  A.prototype.a = 123;
  A.prototype.fn = function(){
    console.log(this)
  };
  // 第一种
  B.prototype = new A();
  new B().fn(); // B {}
  new B().a; // 123
  // 第二种
  B.prototype = A.prototype;
  new B().fn(); // B {}
  new B().a; // 123
  ```
  ![原型链](./assets/proto.gif)  
  ```
  obj = {base:1,arr:[1,2]}
  function A(){}
  A.prototype = obj;
  a = new A();
  a.arr.push(3);
  a.base = 2;

  console.log(obj); // {base:1,arr:[1,2,3]}
  console.log(a); // {base:2}
  // 赋值会在对象身上覆盖属性
  ```