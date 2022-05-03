class StudentService {
    static getAllStudents(students) {
        const allStudents = students.map(student => student);
        return allStudents;
    }
}
module.exports = StudentService;