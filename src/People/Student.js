import {Human} from "./Human";

export class Student extends Human {
    #name
    marks = []

    constructor(name) {
        super(name)
    }

    addMark(mark) {
        this.marks.push(mark)
    }

    getRating() {
        let sumMarks = 0
        for (let i = 0; i < this.marks.length; i++) {
            sumMarks += this.marks[i];
        }

        if (this.marks.length === 0) {
            return 0
        }
        return sumMarks / this.marks.length
    }

    isExcellentStudent() {
        return this.getRating() >= 4.5 ? true : false
    }

    info() {
        console.log(
            `%cSTUDENT\nName: ${this.getName}\nRating: ${this.getRating()}\nIS excellent: ${this.isExcellentStudent()}\nMarks: ${this.marks}`,
            "color:#db00c5; font-size: 14px"
        )
    }

}