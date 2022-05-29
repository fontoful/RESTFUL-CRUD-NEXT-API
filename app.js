const express = require('express')
const morganBody = require('morgan-body')
const cors = require('cors')
const dbConnect = require('./config/mongo')
require('dotenv').config();
const loggerStream = require('./utils/handleLogger')

// init app with express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'))

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: (req, res) => {
    return res.statusCode < 400
  }
})

const port = process.env.PORT || 3000;

/**
* Invoke routes
*/
app.use('/api', require('./routes'))

app.listen(port, () => {
  console.log(`server started on port ${port}`)
});

dbConnect()
