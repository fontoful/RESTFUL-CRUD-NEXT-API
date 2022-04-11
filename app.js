const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
require('dotenv').config();

// init app with express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'))

const port = process.env.PORT || 3000;

/**
* Invoke routes
*/
app.use('/api', require('./routes'))

app.listen(port, () => {
  console.log(`server started on port ${port}`)
});

dbConnect()