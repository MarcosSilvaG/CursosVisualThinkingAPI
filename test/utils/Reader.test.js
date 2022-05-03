const Reader = require("../../lib/utils/Reader");

describe("Tests for Reader method", () => {
    test("1) Json not to be null", () => {
        const students = Reader.readJsonFile("test/students.json");
        expect(students).not.toBeNull();
    });
    test("2) Return data fom JSON file", () => {
        const students = Reader.readJsonFile("test/students.json");
        const studentsName = students.map(studentName => studentName.name);
        expect(studentsName).toContain("Lucinda");
    });
    test("3) Get total number of students", () => {
        const students = Reader.readJsonFile("test/students.json");
        expect(students.length).toBe(3);
    });
});