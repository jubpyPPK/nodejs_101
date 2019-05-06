const express = require('express')
const bodyParser = require('body-parser')
const {sequelize} = require('./models')

var users = require('./routes/users');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',users);

let port = 8080
// sequelize.sync({force: true}).then(() => {
//     app.listen(port, function () {
//         console.log('Server running on ' + port)
//     })
//   })

app.listen(port, function () {console.log('Server running on ' + port)})

module.exports = app