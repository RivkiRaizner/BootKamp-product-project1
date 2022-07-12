
const express = require('express');
const app = express();
// const core= require('core');
// app.use(core());
const users=require('./routes/User.route');
const meetings=require('./routes/Meeting.route');
// const cors= require('cors');
// app.use(cors());
// require('dotenv').config();
const port=8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', users );
app.use('/meetings', meetings );
app.use(express.static('public'));

// app.use((req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'./static/HTML/404.html'));
//   })
// app.use((err, req, res, next) => {
//     console.log(err);
//     res.status(500).send('something failed');
// })

app.listen(port,()=>{
    console.log('listening on port '+port); 
});
// const path = require('path');


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// var createError = require('http-errors');
 
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

 

 

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

 

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


 