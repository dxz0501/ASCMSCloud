const article = require("../model/article.js")

exports.create = async({...args }) => {
    return await article.create(args);
};

exports.destroy = async(id) => {
    return article.destroy({
        where: {
            id
        }
    });
};

exports.update = async({ title, info, name, pic, date, id }) => {
    return article.update({
        title,
        info,
        name,
        pic,
        date,
    }, {
        where: {
            id
        }
    });
};

exports.getList = async(title = '', name = '') => {
    let whereObj = {};
    if (title) {
        whereObj['title'] = {
            'like': '%' + title + '%'
        };
    }
    if (name) {
        whereObj['name'] = {
            'like': '%' + name + '%'
        };
    }
    const articleList = await article.findAll({
        order: [
            ['id', 'desc']
        ],
        where: whereObj
    });
    return articleList
};