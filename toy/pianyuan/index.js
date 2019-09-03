const { promisify } = require('util');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio')

const _request = promisify(request);
const baseUrl = "http://pianyuan.la";

const config = readJSON('./config.json');

function readJSON(path) {
  console.log(fs.readFileSync(path).toString());

  return JSON.parse(fs.readFileSync(path).toString());
}

function writeJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data));
}


async function getListUrlByPageIndex(pageIndex = 1, startIndex = 1) {

  let list = [];
  const path = `./page_${pageIndex}.json`;
  // if (fs.existsSync(path)) {
  //   list = readJSON(path);
  // }

  console.log(`开始获取第${pageIndex}页数据...`);
  const startTime = Date.now();

  const htmlText = (await _request(`${baseUrl}/mv?p=${pageIndex}`)).body;
  const $ = cheerio.load(htmlText)
  const nopls = Array.from($("#main-container .nopl"));

  for (let i = startIndex - 1; i < nopls.length; i++) {

    console.log(`\t 开始获取第${i + 1}个电影数据...`);
    try {
      const item = nopls[i];
      const a = $(item).find(".nobr a");
      // console.log(a.text(), a.attr("href"));
      const url1080 = await getMovie1080pUrl(a.attr("href"));
      if (!url1080) {
        console.log(`\t 第${i + 1}个电影数据获取出现问题未找到1080p电影，已跳过!`);
        continue;
      }
      const info = await getMovieInfo(url1080);
      // 评分
      info.score = $(item).find(".info .num").text();
      list.push(info);
      console.log(`\t 第${i + 1}个电影数据获取成功`);
    } catch (error) {
      console.log(`\t 第${i + 1}个电影数据获取失败 errinfo: ${error && error.message || '未知错误'}`);

    }

  }
  console.log(`\t\t 第${pageIndex}页数据正在保存！`);
  writeJSON(path, list);
  writeJSON('./config.json', {
    pageIndex,
    startIndex: 1
  });
  console.log(`\t\t 第${pageIndex}页数据保存成功！`);
  const time = ((Date.now() - startTime) / 1000) | 0;
  console.log(`第${pageIndex}页数据获取成功！共${list.length}个电影 花费${time}s`);
}

async function getMovie1080pUrl(url) {
  const htmlText = (await _request(`${baseUrl}${url}`)).body;
  const $ = cheerio.load(htmlText)
  let currentEl = null;
  const lsitName = Array.from($(".firstr .label-warning"));

  for (let i = 0; i < lsitName.length; i++) {
    const item = lsitName[i];
    if ($(item).text().indexOf("1080") != -1) {
      currentEl = $(item).parents(".data");
      break;
    }
  }

  if (currentEl === null) {
    return null;
  }

  const nobr = currentEl.find("tr:not(.firstr)").eq(0).find(".nobr a");
  // console.log(nobr.attr('href'), nobr.text());
  // console.log("\n");
  return nobr.attr('href');
}

async function getMovieInfo(url) {
  const htmlText = (await _request(`${baseUrl}${url}`)).body;
  const $ = cheerio.load(htmlText)

  const res = {
    title: "",
    name: "",
    score: 0,
    size: 0,
    date: "",
    format: "1080p",
    fileTree: "",
    magnet: "",
    img: ""
  };
  res.title = $("h2").text().trim();
  res.name = $("h1").text();
  const info = $(".base.clearfix li");
  res.format = info.eq(0).text();
  res.size = info.eq(1).text();
  res.date = info.eq(2).text();
  res.fileTree = $(".fileTree.treeview").text();
  res.magnet = $(".btn-sm[href^=magnet]").attr("href");
  res.img = $(".minfo img").attr("src");

  return res;
}

(async function () {
  for (let i = config.pageIndex || 1; i <= 112; i++) {
    await getListUrlByPageIndex(i, config.startIndex || 1);
  }
})();