/*
 * @Author: bucai
 * @Date: 2021-05-27 11:06:52
 * @LastEditors: bucai
 * @LastEditTime: 2021-05-28 11:24:26
 * @Description: 二叉搜索树
 */

class TreeNode {
  /**
   * 
   * @param {number} value 
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  toString () {
    return JSON.stringify(this)
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * 插入位置判断
   * @param {TreeNode} node 
   * @param {TreeNode} newNode 
   */
  insertNode (node, newNode) {
    // 如果小于就插入到左边 
    if (newNode.value < node.value) {
      // 如果不为空说明存在子节点，就将 新节点 插入到 子节点
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert (value) {
    const node = new TreeNode(value);

    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(this.root, node);
    }
  }

  /**
   * 
   * @param {TreeNode} node 
   */
  leftSort (node) {
    const list = [node.value];
    if (node.left) {
      const leftList = this.leftSort(node.left);
      list.push(...leftList)
    }

    if (node.right) {
      const rightList = this.leftSort(node.right);
      list.push(...rightList)
    }

    return list;
  }

  /**
   * 前序遍历
   * @returns 
   */
  prevSort () {
    /** @type {TreeNode} */
    const root = this.root
    if (root === null) return [];
    return this.leftSort(this.root);
  }



  /**
   * 
   * @param {TreeNode} node 
   */
  centerSortNode (node) {
    const list = [];

    if (node.left) {
      const leftList = this.centerSortNode(node.left);
      list.push(...leftList)
    }

    list.push(node.value);

    if (node.right) {
      const rightList = this.centerSortNode(node.right);
      list.push(...rightList)
    }

    return list;
  }

  /**
   * 中序遍历
   * @returns 
   */
  centerSort () {
    /** @type {TreeNode} */
    const root = this.root
    if (root === null) return [];
    return this.centerSortNode(this.root);
  }


  /**
   * 
   * @param {TreeNode} node 
   */
  nextSortNode (node) {
    const list = [];

    if (node.left) {
      const leftList = this.nextSortNode(node.left);
      list.push(...leftList)
    }

    if (node.right) {
      const rightList = this.nextSortNode(node.right);
      list.push(...rightList)
    }
    list.push(node.value);

    return list;
  }
  /**
   * 后序遍历
   * @returns 
   */
  nextSort () {
    /** @type {TreeNode} */
    const root = this.root
    if (root === null) return [];
    return this.nextSortNode(this.root);
  }

  /**
   * 最大值
   * @returns 
   */
  max () {
    let node = this.root;
    if (node === null) return;

    while (node.right !== null) {
      node = node.right;
    }

    return node.value;
  }
  /**
   * 最小值
   * @returns 
   */
  min () {
    let node = this.root;
    if (node === null) return;

    while (node.left !== null) {
      node = node.left;
    }

    return node.value;
  }

  /**
   * 搜索
   * @param {number} value 
   * @returns 
   */
  search (value) {

    let node = this.root;

    while (node !== null) {
      if (node.value === value) {
        return node;
      }
      // 如果当前节点的值大于搜索的值
      // 则说明要搜索的值在左边
      if (node.value > value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }
  /**
   * 移除
   * @param {number} value 
   */
  remove (value) {
    let prev = null;
    let current = this.root;

    while (current !== null) {
      // 找到之后
      if (current.value === value) {
        // 说明是顶层
        if (prev === null) {
          this.root = null
        } else {

          if (prev.left === current) {
            prev.left = null
          } else if (prev.right === current) {
            prev.right = null
          }
          // 插入

          const cLeft = current.left;
          const cRight = current.right;

          if (cLeft) {
            this.insertNode(prev, cLeft);
          }
          if (cRight) {
            this.insertNode(prev, cRight);
          }
        }
        return;
      }

      prev = current;
      // 如果当前节点的值大于搜索的值
      // 则说明要搜索的值在左边
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}

const bst = new BinarySearchTree()

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);

console.log('bst', bst);

console.log('bst.prevSort()', bst.prevSort());
console.log('bst.centerSort()', bst.centerSort());
console.log('bst.nextSort()', bst.nextSort());
console.log('bst.max()', bst.max());
console.log('bst.min()', bst.min());
console.log('bst.search(9)', bst.search(9));

console.log('\n------------remove---------\n');
bst.remove(7)
console.log('\n------------removed---------\n');
console.log('bst.prevSort()', bst.prevSort());
console.log('bst.centerSort()', bst.centerSort());
console.log('bst.nextSort()', bst.nextSort());
console.log('bst.max()', bst.max());
console.log('bst.min()', bst.min());

