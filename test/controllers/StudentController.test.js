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
    test("3) Return emails from students with certificates == true", () => {
        const studentsEmailsByCertificate = StudentController.getEmailsByCertificate();
        expect(studentsEmailsByCertificate.length).toBe(29);
    });
    test("4) Return the emails from students with certificates == tue", () => {
        const studentsWithCertification = StudentController.getEmailsByCertificate();
        expect(studentsWithCertification).toContain("Sharlene@visualpartnership.xyz");
    });
});
