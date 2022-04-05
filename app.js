const express = require('express')
const cors = require('cors')
require('dotenv').config();

// init app with express
const app = express();

app.use(cors);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}`)
});