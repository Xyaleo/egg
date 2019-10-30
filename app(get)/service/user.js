const Service = require('egg').Service;
class UserService extends Service {

    async find() {
        // 获取 get 传值
        const query = this.ctx.query;
        // 返回响应信息
        this.ctx.response.body = query;
    }
}
module.exports = UserService;