// 使用dotenv库
const dotenv = require('dotenv')

dotenv.config()

// const SERVER_PORT = 8000
console.log(process.env.SERVER_PORT)

module.exports = {
    SERVER_PORT
} = process.env