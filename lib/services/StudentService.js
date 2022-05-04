class StudentService {
    static getAllStudents(students) {
        const allStudents = students.map(student => student);
        return allStudents;
    }
    static getStudentsByCertification(students) {
        return students.filter(student => student.haveCertification == true).map(studentEmail => studentEmail.email);
    }
}
module.exports = StudentService;