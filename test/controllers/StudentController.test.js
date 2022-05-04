const StudentController = require("../../lib/controllers/StudentController");


describe("Tests for ExplorerController class", () => {
    test("1) Test for get all Students", () => {
        const allStudents = StudentController.getAllStudents();
        expect(allStudents.length).toBe(51);
    });
    test("2) Return data fom JSON file", () => {
        const allStudents = StudentController.getAllStudents();
        expect(allStudents).not.toBeNull();
    });
});
