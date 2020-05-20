const fs = require('fs');
var express = require('express');
var router = express.Router();

let students = JSON.parse(fs.readFileSync('students.json'))

router.get('/:id', (req,res) => {
  // console.log(students.find(student => student.studentId === Number(req.params.id)))
  const selectedStudent = students.find(student => student.studentId === Number(req.params.id))
  res.send(selectedStudent.grade)
});

router.post('/', (req,res) => {
  if(req.body.grade && req.body.studentId){
    res.status(200).send('awesome');
  }
})

module.exports = router;