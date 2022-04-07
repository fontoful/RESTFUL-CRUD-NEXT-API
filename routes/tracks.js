const { Router } = require('express')

const router = Router();

// TODO: http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', (req, res) => {
  const data = ['hola', 'mundo']

  res.send({ data })
})

module.exports = router;