const StudentService = require("../../lib/services/StudentService");
const Reader = require("../../lib/utils/Reader");

describe("Tests for student services", () => {
    test("1) Return all students", () => {
        const students = [
            { name: "Warren", credits: 500},
            { name: "Lucinda", credits: 400},
            { name: "Fuentes", credits: 600}
        ];
        const allStudents = students.map(student => student);
        expect(allStudents.length).toBe(3);
    });
    test("2) Return all Students from JSON with StudentService", () => {
        const students = Reader.readJsonFile("test/students.json");
        const allStudents = StudentService.getAllStudents(students);
        expect(allStudents.length).toBe(3);
    });
});