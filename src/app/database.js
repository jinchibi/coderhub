const mysql = require('mysql2')

// 创建连接池
const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'coderhub',
    user: 'root',
    password: 'BJCtm94666',
    connectionLimit: 5
})

// 检测是否连接成功
connectionPool.getConnection((err, connection) => {
    if (err) {
        console.log('获取连接失败')
        return
    }
    connection.connect(err => {
        if (err) {
            console.log('连接失败')
        } else {
            console.log('连接成功')
        }
    })
})

const connection = connectionPool.promise()
module.exports = connection