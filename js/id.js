// 生成 id
// 要求： 唯一 && 1s => 10000
// 格式: [服务器ID][时间戳][自增][随机数]
// 长度: [10][40][10][10]
class IDGenerator {
  constructor(server_id) {
    this.index = 0;
    this.server_id = server_id;
    this.initTimestamp = Date.now();
  }
  next_index() {
    if (this.index > 1000) {
      this.index = 0;
    }
    return ++this.index;
  }
  idToString(idNumber = 0) {
    const end = idNumber
      .toString()
      .match(/[0-9]{1,3}/g)

      .map(item => {
        item = +item % 26;
        let init = 65;
        if (item % 2 === 0) {
          init = 97;
        }
        return String.fromCharCode(item + init);
      }).join('');
    return end;
  }
  next_id() {
    const server_id = BigInt(this.server_id);
    const timestamp = BigInt(Date.now() - this.initTimestamp);
    const index = BigInt(this.next_index());
    const random = BigInt((Math.random() * 1000) | 0);

    let id = server_id << 10n; // 20
    id = (id + timestamp) << 50n; // 40
    id = (id + index) << 60n; // 10
    id = id + random; // 10

    return this.idToString(id);
  }

}

const idg = new IDGenerator(1000);
console.time('time');
const list = [];
const start = Date.now();
while (Date.now() - start < 50 * 1000) {
  list.push(idg.next_id());
}
console.timeEnd('time');
console.log(list.length, new Set(list).size);
