var request = require('request');
var cheerio = require('cheerio');
var zhihu = require('../model/zhihu.js');

const crawler = function(callback) {
    var url = 'http://daily.zhihu.com/';
    parserMain(url, function(err, list) {
        for (let item of list) {
            parserContent(item.url, function(err, result) {
                item.info = result.content; //.substring(0, 8000);
                item.content_img = result.content_img;
                item.author_img = result.author_img;
                item.author = result.author;
                saveData(item);
            });
        }
    });
}
const parserMain = function(url, callback) {
    request(url, function(err, res) {
        if (err) {
            callback(err);
        }
        var $ = cheerio.load(res.body.toString());
        var articleList = [];
        $('.box a').each(function() {
            var title = $(this).children().last().text().trim();
            var url = 'http://daily.zhihu.com' + $(this).attr('href');
            var img = $(this).children().first().attr('src');
            var item = {
                title: title,
                url: url,
                img: img,
                //info: info,
            };
            articleList.push(item);
        });
        callback(null, articleList);
    });
}

const parserContent = function(url, callback) {
    request(url, function(err, res) {
        if (err) {
            callback(err);
        }
        var $ = cheerio.load(res.body.toString());
        var content = $('.content p').text();
        var content_img = $('.img-wrap img').attr('src');
        var author_img = $('.avatar').attr('src');
        var author = $('.author').text();
        let result = {
            content: content,
            content_img: content_img,
            author_img: author_img,
            author: author,
        }
        callback(null, result);
    });
}


const saveData = async(item) => {
    await zhihu.create({
        title: item.title,
        url: item.url,
        img: item.img,
        info: item.info,
        content_img: item.content_img,
        author_img: item.author_img,
        author: item.author,
    });
}

const getData = async(ctx) => {
    //crawler();
    const list = await zhihu.findAll();
    ctx.body = {
        list
    };
}
module.exports = {
    parserMain,
    parserContent,
    saveData,
    crawler,
    getData
}