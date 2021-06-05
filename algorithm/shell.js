/*
 * @Author: bucai
 * @Date: 2021-06-05 16:39:27
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 17:06:15
 * @Description: 希尔排序 
 */

const list = Array(10).fill(1).map(() => Math.random() * 3000 | 0);
console.log();
console.log(list.join(', '));
console.log();
console.log([...list].sort((a, b) => a < b ? -1 : 1).join(', '));
console.log();

let length = list.length;
// 分组 间隔
let gap = Math.floor(length / 2)

while (gap >= 1) {
  // 进行插入排序
  for (let i = gap; i < length; i++) {

    let temp = list[i];
    let j;
    for (j = i; j >= gap; j -= gap) {
      // 如果当前插入的数据比前面的大就说明已经到了它该插入的位置了
      if (temp > list[j - gap]) {
        break;
      }
      // 这里为了空出最终位置
      // 只要比前面小就一直交换位置 
      list[j] = list[j - gap];
    }

    list[j] = temp;

  }

  gap = Math.floor(gap / 2);
}

console.log();
console.log(list.join(', '));
console.log();


