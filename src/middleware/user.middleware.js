const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')

const verifyUser = async (ctx, next) => {
    // 用户校验 是否为空 是否重复
    const { name, password } = ctx.request.body
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
    // 执行下一个中间件
    await next()
}

const handlePassword = async (ctx, next) => {
    const { password } = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()
}

module.exports = {
    verifyUser,
    handlePassword
}