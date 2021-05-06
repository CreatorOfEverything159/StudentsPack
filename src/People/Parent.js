import {Human} from "./Human";

export class Parent extends Human {
    #name
    children = []
    #mood

    constructor(name, children) {
        super(name);
        this.children = children
    }

    #generateMood() {
        return Boolean(Math.floor(Math.random() * 10 % 2))
    }

    #whatSay(child) {
        if (this.#mood && child.isExcellentStudent()) return `My ${child.getName} is best!`
        else if (!this.#mood && child.isExcellentStudent()) return `My ${child.getName} is good!`
        else if (this.#mood && !child.isExcellentStudent()) return `My ${child.getName} is ok!`
        else return `My ${child.getName} is bad!`
    }

    #isExcellentStudents() {
        let sumExcellent = 0
        for (let i = 0; i < this.children.length; i++) {
            sumExcellent += this.children[i].isExcellentStudent()
        }
        return Boolean(Math.round(sumExcellent / this.children.length))
    }

    sayAboutAll() {
        this.#mood = this.#generateMood()
        for (let i = 0; i < this.children.length; i++) {
            console.log(this.#whatSay(this.children[i]))
        }
    }

    sayAboutOneRandom() {
        this.#mood = this.#generateMood()
        console.log(this.#whatSay(this.children[Math.floor(Math.random() * 100 % this.children.length)]))
    }

    sayAboutSum() {
        this.#mood = this.#generateMood()
        if (this.#mood && this.#isExcellentStudents()) console.log("My children are best!")
        else if (!this.#mood && this.#isExcellentStudents()) console.log("My children are good!")
        else if (this.#mood && !this.#isExcellentStudents()) console.log("My children are ok!")
        else console.log("My children are bad!")
    }

    sayAboutThis(child) {
        this.#mood = this.#generateMood()
        if (this.children.includes(child)) {
            console.log(this.#whatSay(child))
        }
        else console.log(`${child.getName} is not my child!`)
    }

}