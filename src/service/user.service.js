const connection = require('../app/database')

class UserService {
    async create(user) {
        // 获取用户user
        const { name, password } = user
        // 拼接成statement
        const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'
        // 执行sql语句
        const [result] = await connection.execute(statement, [name, password])
        return result
    }
    async findName(name) {
        const statement = 'SELECT * FROM user WHERE user.name = ?;'
        const [values] = await connection.execute(statement, [name])
        return values
    }
}

module.exports = new UserService()