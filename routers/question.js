const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  
  res.status(200).json({
    message: "Hi there"
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "you just post something",
    body: req.body
  })
})

router.get('/:qId', (req, res, next) => {
  res.status(200).json({
    message: "this is " + req.params.qId
  })
})

router.get('/:qId/answers', (req, res, next) => {
  res.status(200).json({
    id: req.params.id,
    message: 'you are in aanswers'
  })
})

router.post('/:qId/answers', (req, res, next) => {
  res.status(201).json({
    questionId: req.params.qId,
    body: req.body
  })
})

router.put('/:qId/answers/:aId', (req, res, next) => {
  res.status(200).json({
    questionId: req.params.qId,
    answerId: req.params.aId,
    body: req.body
  })
})

router.delete('/:qId/answers/:aId', (req, res, next) => {
  res.status(200).json({
    questionId: req.params.qId,
    answerId: req.params.aId
  })
})

router.post('/:qId/answers/:aId/vote-:dir', (req, res, next) => {
  if (req.params.dir.search(/^(up|down)$/) === -1) {
    let err = new Error("Not found key");
    err.status = 404;
    next(err);
  } else {
    next();
  }
}, (req, res, next) => {
  res.status(201).json({
    questionId: req.params.qId,
    answerId: req.params.aId,
    vote: req.params.dir,
  })
})

module.exports = router;