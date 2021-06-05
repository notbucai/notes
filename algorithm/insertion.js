/*
 * @Author: bucai
 * @Date: 2021-06-05 09:51:59
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 16:39:06
 * @Description: 插入排序（局部有序） O(N^2)
 */
const list = Array(10).fill(1).map(() => Math.random() * 300 | 0);
console.log();
console.log(list.join(', '));
console.log();
console.log([...list].sort((a, b) => a < b ? -1 : 1).join(', '));
console.log();

let length = list.length;
for (let i = 1; i < length; i++) {
  let temp = list[i];
  let j;
  for (j = i; j > 0; j--) {
    // 如果当前插入的数据比前面的大就说明已经到了它该插入的位置了
    if (temp > list[j - 1]) {
      break;
    }
    // 这里为了空出最终位置
    // 只要比前面小就一直交换位置 
    list[j] = list[j - 1];
  }

  list[j] = temp;
}
console.log();
console.log(list.join(', '));
console.log();


