/*
 * @Author: bucai
 * @Date: 2021-06-05 09:35:02
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 09:51:14
 * @Description: 选择排序  比较： O(N^2) 交换 O(N)
 */
const list = Array(4).fill(1).map(() => Math.random() * 300 | 0);
console.log();
console.log(list.join(', '));
console.log();

const length = list.length;

for (let i = 0; i < length; i++) {
  let min = i;

  for (let j = i + 1; j < length; j++) {
    if (list[min] > list[j]) {
      min = j;
    }
  }
  if (i != min) {
    const t = list[i];
    list[i] = list[min];
    list[min] = t;
  }
}


console.log(list.join(', '));
console.log();


