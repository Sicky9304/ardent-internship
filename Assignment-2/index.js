const express = require("express");

const app = express();

//? 1. 1. Create an Express.js server and display a welcome message.
app.get("/", (req, res) => res.send("<h1>Welcome to Student API</h1>"));

//? 2. Create an API to fetch all students data.
app.use(express.json());
let students = require("./students");
app.get("/students", (req, res) => {
  res.json(students);
});

//? 3. Create an API to fetch a single student by ID.
app.get("/students/:id", (req,res) => {
    const student = students.find(
        s => s.id == req.params.id
    );
    res.json(student);
})

//? 4. Create an API to add a new student.
app.get("/students",(req,res)=>{
   students.push(req.body);

   res.json({
    message: "Student added.",
    students
   });
});

//? 5. Create an API to delete a student by ID.
app.delete("/students/:id",(req,res)=>{
    students = students.filter(
        s => s.id != req.params.id
    );

    res.json({
        message: "Student Deleted."
    });
});

//? 6. Create an API to update student information.
app.put("/students/:id",(req,res)=>{
    const student = students.find(
        s => s.id == req.params.id
    );

    if(student){
        const {name,course,city,price} = req.body;

        student.name = name;
        student.course = course;
        student.city = city;
        student.price = price;
    }

    res.json(student);
});

//? 7. Create an API to search students by name.
app.get("/search/name/:name",(req,res) => {
    const result = students.filter(
        s  => s.name
        .toLowerCase()
        .includes(req.params.name.toLowerCase())
    );
    res.json(result);
});

//? 8. Create an API to search students by course.
    app.get("/students/course/:course", (req, res) => {
  const { course } = req.params;

  const result = students.filter(
    student => student.course.toLowerCase() === course.toLowerCase()
  );

  res.json(result);
});

//? 9. Create an API to filter students by city.
    app.get("/students/city/:city", (req, res) => {
  const { city } = req.params;

  const result = students.filter(
    student => student.city.toLowerCase() === city.toLowerCase()
  );

  res.json(result);
});

//? 10. Create an API to count total students.
    app.get("/students/count", (req, res) => {
  res.json({
    totalStudents: students.length
  });
});

//? 11. Create an API to find students whose fees are greater than a given amount.
    app.get("/students/fees/greater/:amount", (req, res) => {
  const amount = Number(req.params.amount);

  const result = students.filter(
    student => student.fees > amount
  );

  res.json(result);
});

//? 12. Create an API to find students whose fees are less than a given amount.
    app.get("/students/fees/less/:amount", (req, res) => {
  const amount = Number(req.params.amount);

  const result = students.filter(
    student => student.fees < amount
  );

  res.json(result);
});

//? 13. Create an API to sort students by name.
    app.get("/students/sort/name", (req, res) => {

  const result = [...students].sort(
    (a, b) => a.name.localeCompare(b.name)
  );

  res.json(result);
});

//? 14. Create an API to sort students by fees (low to high).
    app.get("/students/sort/fees-asc", (req, res) => {

  const result = [...students].sort(
    (a, b) => a.fees - b.fees
  );

  res.json(result);
});

//? 15. Create an API to sort students by fees (high to low).
    app.get("/students/sort/fees-desc", (req, res) => {

  const result = [...students].sort(
    (a, b) => b.fees - a.fees
  );

  res.json(result);
});

//? 16. Create an API to check whether a student exists or not. 
    app.get("/students/exists/:id", (req, res) => {

  const student = students.find(
    student => student.id == req.params.id
  );

  res.json({
    exists: !!student
  });
});

//? 17. Create an API to calculate total fees collected from all students. 
    app.get("/students/total-fees", (req, res) => {

  const totalFees = students.reduce(
    (total, student) => total + student.fees,0
  );

  res.json({
    totalFees
  });
});

//? 18. Create an API to get course-wise student lists. 
    app.get("/students/course-wise", (req, res) => {

  const result = {};

  students.forEach(student => {

    if (!result[student.course]) {
      result[student.course] = [];
    }

    result[student.course].push(student);

  });

  res.json(result);
});

//? 19. Create an API to add multiple students at once. 
    app.post("/students/many", (req, res) => {

        students.push(...req.body);

        res.json({
            message: "Students Added Successfully",
            students
        });
    });
//? 20. Create an API to generate a simple student report dashboard.
    app.get("/students/dashboard", (req, res) => {

  const totalStudents = students.length;

  const totalFees = students.reduce(
    (total, student) => total + student.fees,0
  );

  const courses = [...new Set(
    students.map(student => student.course)
  )];

  res.json({
    totalStudents,
    totalFees,
    totalCourses: courses.length,
    courses
  });

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`);
});
