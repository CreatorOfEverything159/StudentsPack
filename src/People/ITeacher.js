import {Human} from "./Human";

export class ITeacher extends Human {
    #name

    constructor(name) {
        super(name);
    }

    takeMark() {}
}