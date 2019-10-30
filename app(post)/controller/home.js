'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async render() {
        await this.ctx.render('index.html');
    }
    async index() {
        const { ctx } = this;
       await ctx.service.user.find();

    }
}

module.exports = HomeController;