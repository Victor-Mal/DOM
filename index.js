let countNumber = 0;

const counterDisplay = document.querySelector('#counterDisplay');

function displayNumber(borderColor = 'black', backgroundColor = 'white') {
    let {style, classList} = counterDisplay;

    classList.add('newClassName', 'myClass')
    classList.replace('newClassName', 'myClass')

    if (countNumber === 0) {
        style.border = '2px solid black';
    }
    else {
        style.border = '2px solid' + borderColor;
        style.backgroundColor = backgroundColor;
    }
    counterDisplay.textContent = countNumber;
}

function addOne() {
    countNumber++;
    console.log(countNumber);
    displayNumber('orange', '#00ccff'); 
}

function decrementOne() {
    countNumber--;
    console.log(countNumber);
    displayNumber('orange', 'red');
}

displayNumber()

function addNum() {
    const userNum = prompt('Enter the number'); 
    if (isNaN(Number(userNum))){
        userNum = 0;
    };
    countNumber += Number(userNum);
    console.log(countNumber);
    displayNumber();
}

function decrementNum() {
    const userNum = prompt('Enter the number'); 
    if (isNaN(Number(userNum))){
        userNum = 0;
    };
    countNumber -= Number(userNum);
    console.log(countNumber);
    displayNumber();
}

function reset() {
    countNumber = 0;
    console.log(countNumber);
    displayNumber();
}