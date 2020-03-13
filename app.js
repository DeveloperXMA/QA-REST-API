const express = require('express');
const app = express();

// morgan set the log information, give the api path, status, etc
// something like this GET /questions/123/answers 200 3.624 ms - 32
const morgan = require('morgan');

// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

const questionRouter = require('./routers/question');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/questions', questionRouter);


// We want to handle error here if command reach here
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// Error Handler, you have to use 4 parameters, so express know this is an error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
})

app.listen(port, () => {
  console.log(`Server is listing on port : ${port}`)
})