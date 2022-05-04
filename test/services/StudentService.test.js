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
    test("3) Return students with certification", () => {
        const students = [
            { name: "Warren", email: "algo@algo.com", haveCertification: true},
            { name: "Lucinda", email: "algo@algo.com", haveCertification: true},
            { name: "Fuentes", email: "algo@algo.com", haveCertification: false}
        ];
        const allStudents = StudentService.getAllStudents(students);
        const emailStudents = allStudents.filter(studentsByEmail => studentsByEmail.haveCertification == false);
        expect(emailStudents.length).toBe(1);
    });
    test("4) Return students emails with certification == true", () => {
        const students = Reader.readJsonFile("test/students.json");
        const studentsWithCertification = StudentService.getStudentsByCertification(students);
        expect(studentsWithCertification.length).toBe(2);
    });
    test("5) Return data of students with certification == true", () => {
        const students = [
            { name: "Warren", email: "algo@algo.com", haveCertification: false},
            { name: "Lucinda", email: "algo@algo.com", haveCertification: true},
            { name: "Fuentes", email: "algo@algo.com", haveCertification: false}
        ];
        const studentsWithCertification = StudentService.getStudentsByCertification(students);
        expect(studentsWithCertification).not.toEqual([{ name: "Lucinda", email: "algo@algo.com", haveCertification: true}]);
    });
    test("5) Return email of students with certification == true", () => {
        const students = [
            { name: "Warren", email: "algo@algo.com", haveCertification: false},
            { name: "Lucinda", email: "algo@algo.com", haveCertification: true},
            { name: "Fuentes", email: "algo@algo.com", haveCertification: false}
        ];
        const studentsWithCertification = StudentService.getStudentsByCertification(students);
        expect(studentsWithCertification).toContain("algo@algo.com");
    });
});