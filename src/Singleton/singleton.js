const SingletonObject = (function () {
    let currentNumber = 0;
    let instance;

    class Counter {
        constructor() { }

        static getInstance() {
            if (!instance) {
                instance = new Counter();
            }

            return instance;
        }

        increase() {
            return ++currentNumber;
        }

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

const firstBtnHandler = () => {
    let currentNum = SingletonObject.countFrozen.increase();
    console.log(`From singleton.js: ${currentNum}`);
};

const secondBtn = document.getElementById("second");

const secondBtnHandler = () => {
    let currentNum = SingletonObject.countFrozen.decrease();
    console.log(`From singleton.js: ${currentNum}`);
};

firstBtn?.addEventListener("click", firstBtnHandler);

secondBtn.addEventListener("click", secondBtnHandler);
