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
  ```javascript
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

## 闭包
  > 详情 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)  
  > 在函数外部访问函数局部变量 即为 `闭包`  
  
  ```javascript
    // 假例子
    function fn(){
      const arr = [1,2,3];
      return [1,2,3]
    }
    // 这里只是将引用地址返回并非在外部使用内部变量
    const arr = fn();
    console.log(arr);

  ```

## `==` 与 `===`
  > === 严格相等，会比较两个值的类型和值  
  > == 抽象相等，比较时，会先进行类型转换，然后再比较值  
  >   
  > "==" 转化规则：  
  > 首先通过valueOf 转换，即 obj.valueOf()方法的返回值  
  > 如果 obj.valueOf()方法的返回值是原始类型，那么直接返回  
  > 如果不是，再通过 obj.toString()方法转换  
  > 如果obj.toString()返回的是原始类型，直接返回该值  
  > 如果还不是原始类型，抛出不能转换异常。  
  ```javascript
  let a = {
    value: 0,
    valueOf() {
        return ++this.value;
    }
  }
  console.log(a == 1 && a == 2 && a == 3) // true
  // --- 以下只是 `===` 相等的情况，与主题关系不大
  // --- 请上下分开运行 ---
  var val = 0;
  Object.defineProperty(global, 'a', {
    get: function(){
      return ++val;
    }
  })
  console.log(a === 1 && a === 2 && a === 3) // true
  
  ```


## Event Loop

  > JavaScript的事件分两种，宏任务(macro-task)和微任务(micro-task)  

  > 宏任务：包括整体代码script，setTimeout，setInterval

  > 微任务：Promise.then(非new Promise)，process.nextTick(node中)  

  > 事件的执行顺序，是先执行宏任务，然后执行微任务，这个是基础，任务可以有同步任务和异步任务，同步的进入主线程，异步的进入Event Table并注册函数，异步事件完成后，会将回调函数放入Event Queue中(宏任务和微任务是不同的Event Queue)，同步任务执行完成后，会从Event Queue中读取事件放入主线程执行，回调函数中可能还会包含不同的任务，因此会循环执行上述操作。

  > 补充 `每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。`

## JSONP
  > 利用script/img等不存在跨域问题的属性进行请求  
  > 缺点：`只能进行get请求`    
  > 实现：  
  > 1.创建一个funcrion 参数用于传递jsonp返回的数据
  > 2.在页面上 添加一个 script src属性写好请求的地址  
  > 3.后端返回·1·中的函数（执行函数，传递数据）  

## 数据类型
> 基本数据类型 null undefined string number boolean symbol  
> 复杂（引用）数据类型 Object 

## Math.round() 函数返回一个数字四舍五入后最接近的整数

