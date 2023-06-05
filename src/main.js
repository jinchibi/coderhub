const { SERVER_PORT } = require('./config/server')
const app = require('./app/index')

app.listen(SERVER_PORT, () => {
    console.log('success')
})