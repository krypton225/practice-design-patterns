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

    constructor(builder: CarBuilder) {
        this.maker = builder.getMaker();
        this.model = builder.getModel();
        this.year = builder.getYear();
        this.color = builder.getColor();
        this.wheels = builder.getWheels();
        this.doors = builder.getDoors();
        this.engine = builder.getEngine();
    }

    getMaker(): string {
        return this.maker;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): string | number {
        return this.year;
    }

    getColor(): string {
        return this.color;
    }

    getWheels(): number {
        return this.wheels;
    }

    getDoors(): number {
        return this.doors;
    }

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

    setMaker(maker: string): CarBuilder {
        if (!maker) {
            throw new TypeError("maker can not be empty!");
        }

        this.maker = maker;
        return this;
    }

    getMaker(): string {
        return this.maker;
    }

    setModel(model: string): CarBuilder {
        if (!model) {
            throw new TypeError("model can not be empty!");
        }

        this.model = model;
        return this;
    }

    getModel(): string {
        return this.model;
    }

    setYear(year: string | number): CarBuilder {
        if (!year) {
            throw new TypeError("year can not be empty!");
        }

        this.year = year;
        return this;
    }

    getYear(): string | number {
        return this.year;
    }

    setColor(color: string): CarBuilder {
        if (!color) {
            throw new TypeError("color can not be empty!");
        }

        this.color = color;
        return this;
    }

    getColor(): string {
        return this.color;
    }

    setWheels(wheels: number): CarBuilder {
        if (!wheels) {
            throw new TypeError("wheels can not be empty!");
        }

        this.wheels = wheels;
        return this;
    }

    getWheels(): number {
        return this.wheels;
    }

    setDoors(doors: number): CarBuilder {
        if (!doors) {
            throw new TypeError("doors can not be empty!");
        }

        this.doors = doors;
        return this;
    }

    getDoors(): number {
        return this.doors;
    }

    setEngine(engine: string): CarBuilder {
        if (!engine) {
            throw new TypeError("engine can not be empty!");
        }

        this.engine = engine;
        return this;
    }

    getEngine(): string {
        return this.engine;
    }

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
