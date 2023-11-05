document.addEventListener("DOMContentLoaded", () => {
    let numbersInput = document.getElementById("numbers");
    let specificNumberInput = document.getElementById("specific-number");
    let calculateButton = document.getElementById("calculate-button");
    let minSpan = document.getElementById("min");
    let maxSpan = document.getElementById("max");
    let averageSpan = document.getElementById("average");
    let belowCountSpan = document.getElementById("below-count");
    let aboveCountSpan = document.getElementById("above-count");

    calculateButton.addEventListener("click", () => {
        let numbers = numbersInput.value.split(',').map(num => parseFloat(num));
        let specificNumber = parseFloat(specificNumberInput.value);

        let min = Math.min(...numbers);
        let max = Math.max(...numbers);
        let average = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
        let belowCount = numbers.filter(num => num < specificNumber).length;
        let aboveCount = numbers.filter(num => num > specificNumber).length;

        minSpan.textContent = min;
        maxSpan.textContent = max;
        averageSpan.textContent = average.toFixed(2);
        belowCountSpan.textContent = belowCount;
        aboveCountSpan.textContent = aboveCount;
    });
});
