const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
app.set("json spaces", 4);
const port = 3000;

app.get("/", (req, res) => {
    res.json({ message: "VIRTUAL PARTNER-SHIP API"});
});

app.get("/v1/visual_thinking/students/", (req, res) => {
    const allStudents = StudentController.getAllStudents();
    res.json(allStudents);
});



app.listen(port, () => {
    console.log(`The server is running on localhost:${port}`);
});