var express = require('express');

var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');
var gradesRouter = require('./routes/grades');


var app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/grades', gradesRouter);
app.post('/register', (req,res) =>{
    if(req.body.name && req.body.email){
        res.status(200).send('double rainbow!');
    }
})


module.exports = app;
