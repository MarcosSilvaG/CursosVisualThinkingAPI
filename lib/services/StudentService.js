class StudentService {
    static getAllStudents(students) {
        const allStudents = students.map(student => student);
        return allStudents;
    }
    static getStudentsByCertification(students) {
        return students.filter(student => student.haveCertification == true).map(studentEmail => studentEmail.email);
    }
    static getStudentsByCredits(students) {
        return students.filter(studentCredits => studentCredits.credits >= 500).map(studentsShortData => { return { name: studentsShortData.name, credits: studentsShortData.credits };});
    }
}
module.exports = StudentService;