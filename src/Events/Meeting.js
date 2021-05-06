export class Meeting {
    #teachers = []
    #parents = []
    #lessons = []

    constructor(teachers, parents, lessons) {
        this.#parents = parents
        this.#teachers = teachers
        this.#lessons = lessons
    }

    meetingRun() {
        let absentStudents = []
        let flag = false
        for (let lesson of this.#lessons) {
            if (this.#teachers.includes(lesson.teacher)) {
                for (let student of lesson.interviewedStudents) {
                    for (let parent of this.#parents) {
                        if (parent.children.includes(student)) {
                            parent.sayAboutThis(student)
                            flag = true
                        }
                    }
                    if (!flag) absentStudents.push(student)
                }
            }
        }

        return new Set(absentStudents)
    }
}
