const Service = require('egg').Service;
class UserService extends Service {

    async find() {
        // 获取 post 传值
        const body = this.ctx.request.body;
        // 返回响应信息
        this.ctx.response.body = body;
    }
}
module.exports = UserService;