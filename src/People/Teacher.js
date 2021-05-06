import {ITeacher} from "./ITeacher";

export class Teacher extends ITeacher {
    #name
    #mood
    #moodChangerConst
    #moodCounter

    constructor(name, frequencyOfMoodChanges = 0) {
        super(name)
        this.#moodCounter = 0;
        this.#moodChangerConst = frequencyOfMoodChanges
    }

    takeMark(student) {
        student.addMark(this.#generateMark(student))
    }

    #generateMood() {
        return Boolean(Math.floor(Math.random() * 10 % 2))
    }

    #checkMoodCount() {
        this.#moodCounter++
        if (this.#moodCounter === this.#moodChangerConst) {
            this.#mood = this.#generateMood()
            this.#moodCounter = 0
        }
    }

    #generateMark(student) {
        this.#checkMoodCount()

        if (student.getRating() === 0) {
            return Math.floor(Math.random() * 10 % 4 + 2)
        }

        if (this.#mood && student.isExcellentStudent()) return 5
        else if (!this.#mood && student.isExcellentStudent()) return Math.floor(Math.random() * 10 % 2 + 4)
        else if (this.#mood && !student.isExcellentStudent()) return 4
        else return Math.floor(Math.random() * 10 % 2 + 2)
    }

}
