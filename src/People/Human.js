export class Human {
    #name

    constructor(name) {
        this.#name = name
    }

    get getName() {
        return this.#name
    }

    info() {}

}