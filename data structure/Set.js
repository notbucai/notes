/**
 * 集合
 */
class Set {

  constructor() {
    this.items = {};
  }

  add(data) {
    this.items[data] = 1;
    return this;
  }
  remove(data) {
    delete this.items[data];
    return this;
  }
  has(data) {
    return this.items.hasOwnProperty(data);
  }
  clear() {
    this.items = {};
    return this;
  }
  size() {
    Object.keys(this.items).length;
  }
  values() {
    return Object.keys(this.items);
  }
  // 交集
  // 不对原来结构进行直接操作
  union(otherSet) {
    const unionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      unionSet.add(value);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      unionSet.add(value);
    }
    return unionSet;
  }
  // 并集
  // 不对原来结构进行直接操作
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values1 = this.values();
    const values2 = otherSet.values();
    for (let i = 0; i < values1.length; i++) {
      const value = values1[i];
      if (values2.indexOf(value) != -1) {
        intersectionSet.add(value);
      }
    }
    return intersectionSet;
  }
  // 差集
  difference(otherSet) {
    const newSet = new Set();
    const intersectionSet = this.intersection(otherSet);

    const currentValues = this.values();
    const intersectionValue = intersectionSet.values();

    for (let i = 0; i < currentValues.length; i++) {
      const value = currentValues[i];
      if (intersectionValue.indexOf(value) == -1) {
        newSet.add(value);
      }
    }

    return newSet;
  }

  // 子集
  subset(otherSet){
    const currentVaues = this.values();

    for (let i = 0; i < currentVaues.length; i++) {
      const value = currentVaues[i];
      if(!otherSet.has(value)){
        return false;
      }
    }

    return true;
  }


}

!(function () {
  const a = new Set();
  a.add(1);
  a.add(1);
  a.add(3);
  a.add(1);
  a.add(99);
  a.add(2);
  console.log(a.values().join(', '));
  a.remove(1);
  console.log(a.values().join(', '));
  a.remove(2);
  console.log(a.values().join(', '));

  console.log(a.has(2));
  console.log(a.has(3));
  const set1 = new Set();
  set1.add(1);
  set1.add(2);
  set1.add(4);
  set1.add(3);
  console.log(a.union(set1).values().join(' , '));

  console.log(a.intersection(set1).values().join(' , '));

  console.log(a.difference(set1).values().join(' , '));

  const set2 = new Set();
  set2.add(99);
  set2.add(123);
  set2.add(3);
  console.log(a.subset(set2));
})();