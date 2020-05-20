const fs = require('fs');
var express = require('express');
var router = express.Router();

let students = JSON.parse(fs.readFileSync('students.json'));

router.get('/', (req, res) => {
  //console.log(req.query)
  if(req.query.name){
    const selectedStudent = students.find(student => student.name === req.query.name)
    res.send(selectedStudent)
  }
  else {
    res.send(students);
  }
});

router.get('/:id', (req,res) => {
  console.log(req.params)
  const selectedStudent = students.find(student => student.studentId === Number(req.params.id))
  res.send(selectedStudent)
});

module.exports = router;
