const pi = require('pi');

const LEN = 500;

const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs')
const path = require('path');

const resData = [[], [], [], [], [], [], [], [], [], []];
const qStrs = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
function getData(queryIndex, page) {
  if (queryIndex >= qStrs.length) {
    return;
  }
  console.log('init queryIndex: ' + queryIndex + "   page:" + page)
  console.log(`http://www.shicimingju.com/chaxun/shiju/nd_0/${encodeURI(qStrs[queryIndex])}/${page}/0`);
  superagent.get(`http://www.shicimingju.com/chaxun/shiju/nd_0/${encodeURI(qStrs[queryIndex])}/${page}/0`).end((err, res) => {
    if (err) {
      getData(queryIndex + 1, 1);
      return err;
    }
    const $ = cheerio.load(res.text);
    const c_res = resData[queryIndex];
    $('.www-main-container h3').each((_, el) => {
      c_res.push($(el).text().replace(/^[0-9\.]+、/, ''));
    });
    save(resData);
    getData(queryIndex, page + 1)
  });
}

// 执行即可获取对应的诗词数据
// getData(0, 1);

function save(data) {
  fs.writeFileSync(path.join(__dirname, '/assets/data.json'), JSON.stringify(data), { encoding: 'utf-8' });
}

function read() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '/assets/data.json')));
}

function feihualing(piArr, data) {
  // 对象旧的数据保存
  const oldSC = {};

  return piArr.map(item => {
    while (true) {
      const index = oldSC[item] = oldSC[item] || 0;
      // 添加当前到了那一条
      oldSC[item] += 1;
      const sc = data[parseInt(item)][index];
      // 判断是否使用过
      if (!oldSC[sc]) {
        // 添加使用过的标记
        oldSC[sc] = 1;
        return sc;
      }
    }
  });
}

function init() {
  // 读取已经下载好了的诗词
  const data = read().map(item => Array.from(new Set(item)));
  // console.log(data);
  // 获取len长度的pi
  const piSplit = pi(LEN, false).toString().split('');
  //  得到数据
  const fhl = feihualing(piSplit, data);
  // 去重复的数据
  console.log(new Set(fhl).size);
}

init();


