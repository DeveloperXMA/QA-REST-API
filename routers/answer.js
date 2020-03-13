const express = require('express');
const router = express.Router();

router
  .get('/:id/answers', (req, res, next) => {
    res.status(200).json({
      message: 'you are in answers'
    })
  })

module.exports = router;