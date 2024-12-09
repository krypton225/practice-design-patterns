interface ICarBuilder {
    setMaker(maker: string): CarBuilder;
    getMaker(): string;

    setModel(model: string): CarBuilder;
    getModel(): string;

    setYear(year: string | number): CarBuilder;
    getYear(): string | number;

    setColor(color: string): CarBuilder;
    getColor(): string;

    setWheels(wheels: number): CarBuilder;
    getWheels(): number;

    setDoors(doors: number): CarBuilder;
    getDoors(): number;

    setEngine(engine: string): CarBuilder;
    getEngine(): string;
}

class Car {
    protected maker: string;
    protected model: string;
    protected year: string | number;
    protected color: string;
    protected wheels: number;
    protected doors: number;
    protected engine: string;

    /**
     * Initializes a new instance of the Car class from the given builder.
     * 
     * @param builder The builder to use to initialize the Car.
     */
    constructor(builder: CarBuilder) {
        this.maker = builder.getMaker();
        this.model = builder.getModel();
        this.year = builder.getYear();
        this.color = builder.getColor();
        this.wheels = builder.getWheels();
        this.doors = builder.getDoors();
        this.engine = builder.getEngine();
    }

    /**
     * Retrieves the maker of the Car.
     * 
     * @returns {string} The maker of the Car.
     */
    getMaker(): string {
        return this.maker;
    }

    /**
     * Retrieves the model of the Car.
     * 
     * @returns {string} The model of the Car.
     */
    getModel(): string {
        return this.model;
    }

    /**
     * Retrieves the year of the Car.
     *
     * @returns {string | number} The year of the Car, which can be a string or a number.
     */
    getYear(): string | number {
        return this.year;
    }

    /**
     * Retrieves the color of the Car.
     * 
     * @returns {string} The color of the Car.
     */
    getColor(): string {
        return this.color;
    }

    /**
     * Retrieves the number of wheels of the Car.
     * 
     * @returns {number} The number of wheels of the Car.
     */
    getWheels(): number {
        return this.wheels;
    }

    /**
     * Retrieves the number of doors of the Car.
     * 
     * @returns {number} The number of doors of the Car.
     */
    getDoors(): number {
        return this.doors;
    }

    /**
     * Retrieves the engine of the Car.
     * 
     * @returns {string} The engine of the Car.
     */
    getEngine(): string {
        return this.engine;
    }
}

class CarBuilder implements ICarBuilder {
    protected maker!: string;
    protected model!: string;
    protected year!: string | number;
    protected color!: string;
    protected wheels!: number;
    protected doors!: number;
    protected engine!: string;

    /**
     * Sets the maker of the Car.
     *
     * @param {string} maker - The maker of the Car to set.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if maker is empty.
     */
    setMaker(maker: string): CarBuilder {
        if (!maker) {
            throw new TypeError("maker can not be empty!");
        }

        this.maker = maker;
        return this;
    }

    /**
     * Retrieves the maker of the Car.
     * 
     * @returns {string} The maker of the Car.
     */
    getMaker(): string {
        return this.maker;
    }

    /**
     * Sets the model of the Car.
     *
     * @param {string} model - The model of the Car to set.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if model is empty.
     */
    setModel(model: string): CarBuilder {
        if (!model) {
            throw new TypeError("model can not be empty!");
        }

        this.model = model;
        return this;
    }

    /**
     * Retrieves the model of the Car.
     * 
     * @returns {string} The model of the Car.
     */
    getModel(): string {
        return this.model;
    }

    /**
     * Sets the year of the Car.
     *
     * @param {string | number} year - The year of the Car to set. Can be a string or a number.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if year is empty.
     */
    setYear(year: string | number): CarBuilder {
        if (!year) {
            throw new TypeError("year can not be empty!");
        }

        this.year = year;
        return this;
    }

    /**
     * Retrieves the year of the Car.
     *
     * @returns {string | number} The year of the Car, which can be a string or a number.
     */
    getYear(): string | number {
        return this.year;
    }

    /**
     * Sets the color of the Car.
     *
     * @param {string} color - The color of the Car to set.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if color is empty.
     */
    setColor(color: string): CarBuilder {
        if (!color) {
            throw new TypeError("color can not be empty!");
        }

        this.color = color;
        return this;
    }

    /**
     * Retrieves the color of the Car.
     * 
     * @returns {string} The color of the Car.
     */
    getColor(): string {
        return this.color;
    }

    /**
     * Sets the number of wheels of the Car.
     *
     * @param {number} wheels - The number of wheels of the Car to set.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if wheels is empty.
     */
    setWheels(wheels: number): CarBuilder {
        if (!wheels) {
            throw new TypeError("wheels can not be empty!");
        }

        this.wheels = wheels;
        return this;
    }

    /**
     * Retrieves the number of wheels of the Car.
     * 
     * @returns {number} The number of wheels of the Car.
     */
    getWheels(): number {
        return this.wheels;
    }

    /**
     * Sets the number of doors of the Car.
     *
     * @param {number} doors - The number of doors of the Car to set.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if doors is empty.
     */
    setDoors(doors: number): CarBuilder {
        if (!doors) {
            throw new TypeError("doors can not be empty!");
        }

        this.doors = doors;
        return this;
    }

    /**
     * Retrieves the number of doors of the Car.
     * 
     * @returns {number} The number of doors of the Car.
     */
    getDoors(): number {
        return this.doors;
    }

    /**
     * Sets the engine type of the Car.
     *
     * @param {string} engine - The type of engine to set for the Car.
     *
     * @returns {CarBuilder} The current instance of CarBuilder for method chaining.
     *
     * @throws {TypeError} if engine is empty.
     */
    setEngine(engine: string): CarBuilder {
        if (!engine) {
            throw new TypeError("engine can not be empty!");
        }

        this.engine = engine;
        return this;
    }

    /**
     * Retrieves the engine type of the Car.
     * 
     * @returns {string} The engine type of the Car.
     */
    getEngine(): string {
        return this.engine;
    }

    /**
     * Builds a new Car instance using the current configuration of the CarBuilder.
     * 
     * @returns {Car} A new Car instance configured with the properties set on the builder.
     */
    build(): Car {
        return new Car(this);
    }
}

const firstCar = new CarBuilder()
    .setColor("red")
    .setMaker("BMW")
    .setModel("2020")
    .setYear(2020)
    .setWheels(4)
    .setEngine("First Engine")
    .build();

console.log(firstCar);
