const SingletonObject = (function () {
    let currentNumber = 0;
    let instance;

    class Counter {
        constructor() { }

        /**
         * Returns the singleton instance of the Counter class.
         * If an instance does not already exist, a new one is created.
         * This ensures that only one instance of Counter is used
         * throughout the application.
         *
         * @returns {Counter} The singleton instance of the Counter class.
         */
        static getInstance() {
            if (!instance) {
                instance = new Counter();
            }

            return instance;
        }

        /**
         * Increments the currentNumber by one and returns the updated value.
         *
         * @returns {number} The updated value of currentNumber after incrementing.
         */
        increase() {
            return ++currentNumber;
        }

        /**
         * Decrements the currentNumber by one and returns the updated value.
         *
         * @returns {number} The updated value of currentNumber after decrementing.
         */
        decrease() {
            return --currentNumber;
        }
    }

    const counterObject = Counter.getInstance();
    const countFrozen = Object.freeze(counterObject);

    return {
        countFrozen
    };
})();

const firstBtn = document.getElementById("first");

/**
 * Handles the first button click event. Increments the value of the singleton
 * instance and logs the new value to the console.
 */
const firstBtnHandler = () => {
    let currentNum = SingletonObject.countFrozen.increase();
    console.log(`From singleton.js: ${currentNum}`);
};

const secondBtn = document.getElementById("second");

/**
 * Handles the second button click event. Decrements the value of the singleton
 * instance and logs the new value to the console.
 */
const secondBtnHandler = () => {
    let currentNum = SingletonObject.countFrozen.decrease();
    console.log(`From singleton.js: ${currentNum}`);
};

firstBtn?.addEventListener("click", firstBtnHandler);

secondBtn.addEventListener("click", secondBtnHandler);
