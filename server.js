const express = require('express')

// express likes to call the server "app"
const app = express()

app.use('/', express.json()) // add middleware for json data
app.use('/api/users', require('./routes/users'))
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`)
})
