const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
// Do work here
router.get('/', storeController.homePage)

// router.get('/reverse/:name', (req, res) => {
//   const rev = [...req.params.name].reverse().join('')
//   res.send(rev)
// })
module.exports = router;
