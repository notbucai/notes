/*
 * @Author: bucai
 * @Date: 2021-06-05 17:10:25
 * @LastEditors: bucai
 * @LastEditTime: 2021-06-05 20:31:12
 * @Description: 快速排序
 */
const list = Array(10).fill(1).map(() => Math.random() * 3000 | 0);
console.log();
console.log(list.join(', '));
console.log();
console.log([...list].sort((a, b) => a < b ? -1 : 1).join(', '));
console.log();

/**
 * 
 * @param {Array} list 
 * @returns {Array}
 */
function sort (list) {
  if (list.length <= 1) return list;

  let index = Math.floor(list.length / 2);
  let current = list.splice(index, 1);

  let left = [];
  let right = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] < current) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return sort(left).concat(current, sort(right));
}


const r = sort(list);
console.log();
console.log(r.join(', '));
console.log();


