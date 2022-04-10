const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathStorage = `${__dirname}/../storage`
    cb(null, pathStorage)
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    const fileName = `file-${Date.now()}.${ext}`
    cb(null, fileName)
  }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware
