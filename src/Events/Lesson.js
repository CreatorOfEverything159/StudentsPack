export class Lesson {
    #name
    teacher
    #students = []
    interviewedStudents = []

    constructor(name, teacher, students) {
        this.#name = name
        this.teacher = teacher
        this.#students = students
    }

    grading() {
        let count = Math.floor(Math.random() * 100 % this.#students.length)
        for (let i = 0; i < count; i++) {
            let newIndex = Math.floor(Math.random() * 100 % this.#students.length)
            this.teacher.takeMark(this.#students[newIndex])
            this.interviewedStudents.push(this.#students[newIndex])
        }
    }

    info() {
        for (let i = 0; i < this.#students.length; i++) {
            this.#students[i].info()
        }
    }

}