class Logger {
    private static instance: Logger;
    private static count: number = 0;

    private constructor() { }

    /**
     * Returns the singleton instance of the Logger class.
     * If an instance does not already exist, a new one is created.
     * This ensures that only one instance of Logger is used
     * throughout the application.
     *
     * @returns {Logger} The singleton instance of the Logger class.
     */
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    /**
     * Increments the count property and returns the updated value.
     *
     * @returns {number} The updated value of the count property.
     */
    public increment(): number {
        return ++Logger.count;
    }

    /**
     * Decrements the count property and returns the updated value.
     *
     * @returns {number} The updated value of the count property.
     */
    public decrement(): number {
        return --Logger.count;
    }

    /**
     * Logs the current value of the count property to the console.
     */
    public logCount(): void {
        console.log(`From typescript file: ${Logger.count}`);
    }
}

const singletonOneInstance = Logger.getInstance();

Object.freeze(singletonOneInstance);

const firstButton: HTMLButtonElement | null = document.getElementById("first") as HTMLButtonElement;

const secondButton: HTMLButtonElement | null = document.getElementById("second") as HTMLButtonElement;

/**
 * Handles the first button click event. Increments the count of the singleton
 * Logger instance and logs the new count value to the console.
 */
const firstButtonHandler = () => {
    singletonOneInstance.increment();
    singletonOneInstance.logCount();
};

/**
 * Handles the second button click event. Decrements the count of the singleton
 * Logger instance and logs the new count value to the console.
 */
const secondButtonHandler = () => {
    singletonOneInstance.decrement();
    singletonOneInstance.logCount();
};

firstButton?.addEventListener("click", firstButtonHandler);

secondButton?.addEventListener("click", secondButtonHandler);
