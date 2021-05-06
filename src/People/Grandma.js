import {Parent} from "./Parent";

export class Grandma extends Parent{
    #name
    // children = []
    #mood

    constructor(name, children) {
        super(name, children)
    }

    #generateMood() {
        return Boolean(Math.floor(Math.random() * 10 % 2))
    }

    sayAboutThis(child) {
        if (this.children.includes(child)) {
            console.log("My child are the best!")
        }
        else {
            this.#mood = this.#generateMood()
            if (this.#mood) {
                console.log("This child is very good!")
            } else {
                console.log("This child is very bad!")
            }
        }
    }

    sayAboutSum() {
        console.log("My children are the best!")
    }

    sayAboutOneRandom() {
        console.log("My child is the best!")
    }

    sayAboutAll() {
        console.log("My children are the best!")
    }



}