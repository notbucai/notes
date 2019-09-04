class DoubleLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.Node = class {
      constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
      }
    }
  }

  append(data) {
    const node = new this.Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return node;
  }

  insert(position, data) {
    if (position < 0 || position > this.size) {
      throw new Error("position min or max error");
    }
    const node = new this.Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {

      if (position === 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else if (position === this.size) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {

        const current = this.get(position);

        // 下一个节点 等于当前这个节点
        node.next = current;
        // 上一个节点 等于当前这个节点的 上一个节点
        node.prev = current.prev;
        // 当前节点的上一个节点的next 等于插入的节点
        current.prev.next = node;
        // 当前节点的prev 等于插入的节点
        current.prev = node;


      }
    }

    this.size++;
  }

  get(position) {
    if (position < 0 || position >= this.size) {
      throw new Error("position min or max error");
    }
    let c = this.head;
    if (position === 0) {
      return c;
    }
    let i = 1;
    while (c) {
      if (i === position) {
        c = c.next;
        break;
      }
      c = c.next;
      i++;
    }
    return c;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("position min or max error");
    }
    if (index === 0) {
      this.head.next.prev = null;
      this.head = this.head.next;
    } else if (index === this.size - 1) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      const node = this.get(index);

      const prevNode = node.prev;
      const nextNode = node.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.size--;
  }

  indexOf(data) {

    let c = this.head;
    if (c.data === data) {
      return 0
    }

    let position = 0;
    for (let index = 1; index < this.size; index++) {
      c = c.next;
      if (c.data === data) {
        return index;
      }
    }
    return -1;
  }

  update(position, data) {
    const node = this.get(position);
    if (node) {
      node.data = data;
      return true;
    }
    return false;
  }

  valueOf() {
    return JSON.stringify(this.head, 0, 1);
  }
  toString() {
    return JSON.stringify(this.head, 0, 1);
  }
}

(function () {
  const dl = new DoubleLinked();

  dl.append(1);
  dl.append(2);
  dl.append(3);

  dl.insert(0, '0');
  dl.insert(4, '4');
  dl.insert(2, '22');

  dl.removeAt(0); // '0'
  dl.removeAt(1); // '22'
  dl.removeAt(dl.size - 1); // '4'

  dl.update(0, '***');
  dl.update(2, '&&&');

  console.log(dl.indexOf('***'));
  console.log(dl.indexOf(4));
  console.log(dl.indexOf(2));

  console.log(dl);

})();