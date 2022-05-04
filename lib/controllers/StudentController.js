const ExplorerService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getAllStudents() {
        const allStudents = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getAllStudents(allStudents);
    }
}
module.exports = StudentController;