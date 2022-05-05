const ExplorerService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getAllStudents() {
        const allStudents = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getAllStudents(allStudents);
    }
    static getEmailsByCertificate() {
        const students = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getStudentsByCertification(students);
    }
    static getStudentsByCredits() {
        const students = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.getStudentsByCredits(students);
    }
}
module.exports = StudentController;