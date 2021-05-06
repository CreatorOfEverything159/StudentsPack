import {ITeacher} from "./ITeacher";

export class TeacherConst extends ITeacher {
    #name
    #mark

    constructor(name, constMark) {
        super(name);
        this.#mark = constMark
    }

    takeMark(student) {
        student.addMark(this.#mark)
    }

}