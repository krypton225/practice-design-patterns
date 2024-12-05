class Logger {
    private static instance: Logger;
    private static count: number = 0;

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    public increment(): number {
        return ++Logger.count;
    }

    public decrement(): number {
        return --Logger.count;
    }

    public logCount(): void {
        console.log(`From typescript file: ${Logger.count}`);
    }
}

const singletonOneInstance = Logger.getInstance();

Object.freeze(singletonOneInstance);

const firstButton: HTMLButtonElement | null = document.getElementById("first") as HTMLButtonElement;

const secondButton: HTMLButtonElement | null = document.getElementById("second") as HTMLButtonElement;

const firstButtonHandler = () => {
    singletonOneInstance.increment();
    singletonOneInstance.logCount();
};

const secondButtonHandler = () => {
    singletonOneInstance.decrement();
    singletonOneInstance.logCount();
};

firstButton?.addEventListener("click", firstButtonHandler);

secondButton?.addEventListener("click", secondButtonHandler);
