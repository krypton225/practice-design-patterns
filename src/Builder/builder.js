class Computer {
    #processorType;
    #type;
    #mouseType;

    constructor(builder) {
        this.#processorType = builder.getProcessorType();
        this.#type = builder.getType();
        this.#mouseType = builder.getMouseType();
    }
}

class ComputerBuilder {
    #processorType;
    #mouseType;
    #type;

    setProcessorType(processorType) {
        this.#processorType = processorType;
        return this;
    }

    getProcessorType() {
        return this.#processorType;
    }

    setType(type) {
        this.#type = type;
        return this;
    }

    getType() {
        return this.#type;
    }

    setMouseType(mouseType) {
        this.#mouseType = mouseType;
        return this;
    }

    getMouseType() {
        return this.#mouseType;
    }

    build() {
        return new Computer(this);
    }
}

const hpComputer = new ComputerBuilder()
    .setMouseType("HP")
    .setProcessorType("Inter")
    .setType("HP")
    .build();

console.log(hpComputer);
