console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const app = express()
const config = require('./config/config')

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
.then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})

