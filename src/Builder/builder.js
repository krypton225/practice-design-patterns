class Computer {
    #processorType;
    #type;
    #mouseType;

    /**
     * Constructs a new Computer instance using the specified builder.
     * Initializes the processor type, type, and mouse type based on the
     * builder's configuration.
     *
     * @param {ComputerBuilder} builder - The builder used to configure and
     * create the Computer instance.
     */
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

    /**
     * Sets the processor type for the ComputerBuilder.
     *
     * @param {string} processorType - The type of processor to set.
     * 
     * @returns {ComputerBuilder} The current instance of ComputerBuilder for
     * method chaining.
     */
    setProcessorType(processorType) {
        this.#processorType = processorType;
        return this;
    }

    /**
     * Gets the processor type for the ComputerBuilder.
     *
     * @returns {string} The processor type.
     */
    getProcessorType() {
        return this.#processorType;
    }

    /**
     * Sets the type of the ComputerBuilder.
     *
     * @param {string} type - The type of the computer to set.
     * 
     * @returns {ComputerBuilder} The current instance of ComputerBuilder for
     * method chaining.
     */
    setType(type) {
        this.#type = type;
        return this;
    }

    /**
     * Gets the type of the ComputerBuilder.
     *
     * @returns {string} The type of the computer.
     */
    getType() {
        return this.#type;
    }

    /**
     * Sets the mouse type for the ComputerBuilder.
     *
     * @param {string} mouseType - The type of mouse to set.
     * 
     * @returns {ComputerBuilder} The current instance of ComputerBuilder for
     * method chaining.
     */
    setMouseType(mouseType) {
        this.#mouseType = mouseType;
        return this;
    }

    /**
     * Retrieves the type of mouse configured for the ComputerBuilder.
     *
     * @returns {string} The configured mouse type.
     */
    getMouseType() {
        return this.#mouseType;
    }

    /**
     * Creates a new Computer instance using the configuration set in the
     * ComputerBuilder. Any properties that are not set will be undefined in
     * the resulting Computer instance.
     *
     * @returns {Computer} The newly created Computer instance.
     */
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
