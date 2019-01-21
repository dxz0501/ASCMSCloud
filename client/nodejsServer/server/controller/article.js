const article = require("../service/article.js")

const create = async(ctx) => {
    const {
        title,
        info,
        name,
        pic,
        date,
    } = ctx.request.body;
    await article.create({
        title,
        info,
        name,
        pic,
        date
    });
    //await people.create(name, address, date, course);
    ctx.body = {
        msg: 'ok'
    };
};

const destroy = async(ctx) => {
    const { id } = ctx.params;
    await article.destroy(id);
    ctx.body = {
        msg: 'ok'
    };
};

const update = async(ctx) => {
    const { title, info, name, pic, date } = ctx.request.body;
    const { id } = ctx.params;
    await article.update({ title, info, name, pic, date, id });
    ctx.body = {
        msg: 'ok'
    };
};

const getList = async(ctx) => {
    const { title, name } = ctx.query;
    const list = await article.getList(title, name);
    const count = list.length;
    ctx.body = {
        list,
        count
    };
};

module.exports = {
    getList,
    create,
    destroy,
    update
}