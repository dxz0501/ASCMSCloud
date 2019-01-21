var request = require('request');
var cheerio = require('cheerio');
var video = require('../model/video.js');

function spider() {
    var url = 'http://www.imooc.com/learn/857';
    var videolist;
    videocrawler(url, function(err, list) {
        videolist = list;
        videoSave(videolist);
        console.log(videolist);
    });
}
const videocrawler = function(url, callback) {
    request(url, function(err, res) {
        if (err) {
            callback(err);
        }

        var $ = cheerio.load(res.body.toString());
        var videoList = [];
        $('.video li a').each(function() {
            var $title = $(this).parent().parent().parent().text().trim();
            var title = $title.split('\n');
            var text = $(this).text().trim();
            text = text.split('\n');
            var time = text[1].match(/\((\d+\:\d+)\)/);
            var item = {
                title: title[0],
                url: 'http://www.imooc.com' + $(this).attr('href'),
                name: text[0],
                duration: time[1]
            };
            var s = item.url.match(/video\/(\d+)/);
            if (Array.isArray(s)) {
                item.id = s[1];
                videoList.push(item);
            }
        });
        callback(null, videoList);
    });
}

const videoSave = async(list) => {
    for (let item of list) {
        await video.create({
            num: item.id,
            title: item.title,
            url: item.url,
            name: item.name,
            duration: item.duration,
            //date: Sequelize.DATE,
        });
    }
}
module.exports = {
    videocrawler,
    videoSave,
    spider
}