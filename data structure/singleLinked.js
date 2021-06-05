/*
 * @Author: bucai
 * @Date: 2021-06-05 17:10:25
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 20:39:43
 * @Description: 单向链表
 */
class Linked {
  constructor() {
    this.current = null;
    this.head = null;
    this.links = [];
  }

  add (data) {
    const link = {
      data,
      next: null
    }
    this.links.push(link);
    if (this.current === null) {
      this.current = link;
      this.head = link;
    }

    this.current.next = link
  }
  removeAt (index) {

  }
  remove (data) {
    if (!this.head) return false;
    let c = this.head;
    while (true) {
      
    }


  }

}