/*
 * @Author: bucai
 * @Date: 2021-06-05 09:11:04
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 09:51:22
 * @Description: 冒泡排序  比较： O(N^2) 交换 O(N^2)
 */

const list = Array(10).fill(1).map(() => Math.random() * 300 | 0);
console.log();
console.log(list.join(', '));
console.log();

let length = list.length;
for (let i = 0; i < length; i++) {

  for (let j = 0; j < length - i - 1; j++) {
    // 一直将 j 作为当前最大的值
    if (list[j] > list[j + 1]) {
      const tmp = list[j];
      list[j] = list[j + 1];
      list[j + 1] = tmp;
    }
  }
}


console.log(list.join(', '));
console.log();
