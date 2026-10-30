const express = require('express')
const router = express.Router()

router.use('/worker/chats', require('./worker/chats'))
// router.use('/worker/users', require('./worker/users'))


module.exports = router