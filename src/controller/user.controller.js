const userService = require('../service/user.service')

class UserController {
    async create(ctx, next) {
        // 1. 获取用户传递过来的信息
        const user = ctx.request.body

        // 用户校验 是否为空 是否重复
        const { name, password } = user
        if (!name || !password) {
            ctx.body = {
                code: '-1001',
                message: '用户名或密码为空'
            }
            return
        }
        const users = await userService.findName(name)
        if (users.length) {
            ctx.body = {
                code: '-1002',
                message: '用户名已存在'
            }
            return 
        }

        // 2. 将用户信息存储到数据库中
        const res = await userService.create(user)
        // 3. 查看存储的结果，告知前端创建成功
        const body = {
            message: '创建成功',
            data: res
        }
        ctx.body = body
    }
}

module.exports = new UserController()