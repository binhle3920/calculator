function getHistory() {
    return document.getElementById("previous-result").innerText;
}
function printHistory(num) {
    document.getElementById("previous-result").innerText = getFormattedNumber(num);
}


function getOutput() {
    return document.getElementById("current-result").innerText;
}
function printOutput(num) {
    if (num == "")
        document.getElementById("current-result").innerText = 0;
    else
        document.getElementById("current-result").innerText = getFormattedNumber(num);
}


function getFormattedNumber(num) {
    let n = Number(num); //change num from a string to number
    let value = n.toLocaleString("en"); //to change number to example: 3500 to 3,500
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,"")); //using regex (g is global flag)
}

var butZero = document.getElementById("zero-but");
var butOne = document.getElementById("one-but");
var butTwo = document.getElementById("two-but");
var butThree = document.getElementById("three-but");
var butFour = document.getElementById("four-but");
var butFive = document.getElementById("five-but");
var butSix = document.getElementById("six-but");
var butSeven = document.getElementById("seven-but");
var butEight = document.getElementById("eight-but");
var butNine = document.getElementById("nine-but");

var butAC = document.getElementById("ac-but");
var butDel = document.getElementById("del-but");
var butPlus = document.getElementById("plus-but");
var butMinus = document.getElementById("minus-but");
var butMultiply = document.getElementById("multiply-but");
var butDivide = document.getElementById("divide-but");
var butDot = document.getElementById("dot-but");
var butEqual = document.getElementById("equal-but");

var displayVal = "0";
var pendingVal;
var sign = 0;

/* Operator onclick*/
butAC.onclick = () => {
    displayVal = "0";
    pendingVal = "";
    printOutput(displayVal);
    printHistory(pendingVal);
}

butDel.onclick = () => {
    displayVal = displayVal.slice(0, -1);
    printOutput(displayVal);
}

butDot.onclick = () => {
    displayVal += ".";
    printOutput(displayVal);
}

butPlus.onclick = () => {
    pendingVal = displayVal;
    sign = "+";
    displayVal = "";
    printOutput(displayVal);
    printHistory(pendingVal);
}
butMinus.onclick = () => {
    pendingVal = displayVal;
    sign = "-";
    displayVal = "";
    printOutput(displayVal);
    printHistory(pendingVal);
}
butMultiply.onclick = () => {
    pendingVal = displayVal;
    sign = "*";
    displayVal = "";
    printOutput(displayVal);
    printHistory(pendingVal);
}
butDivide.onclick = () => {
    pendingVal = displayVal;
    sign = "/";
    displayVal = "";
    printOutput(displayVal);
    printHistory(pendingVal);
}

butEqual.onclick = () => {
    if (sign == "+") {
        displayVal = Number(displayVal) + Number(pendingVal);
        printOutput(displayVal);
        sign = "="
    }
    if (sign == "-") {
        displayVal = -Number(displayVal) + Number(pendingVal);
        console.log(displayVal);
        printOutput(displayVal);
        sign = "="
    }
    if (sign == "*") {
        displayVal = Number(displayVal) * Number(pendingVal);
        printOutput(displayVal);
        sign = "="
    }
    if (sign == "/") {
        displayVal = parseFloat(pendingVal) / parseFloat(displayVal);
        printOutput(displayVal);
        sign = "="
    }
}
/* Operator onclick */

var checkEqual = () => {
    if (sign == "=") {
        sign = 0;
        pendingVal = displayVal;
        printHistory(pendingVal);
        displayVal = "";
    }
}

/* Number on click */
butOne.onclick = () => {
    checkEqual();
    displayVal += "1";
    printOutput(displayVal);
}
butTwo.onclick = () => {
    checkEqual();
    displayVal += "2";
    printOutput(displayVal);
}
butThree.onclick = () => {
    checkEqual();
    displayVal += "3";
    printOutput(displayVal);
}
butFour.onclick = () => {
    checkEqual();
    displayVal += "4";
    printOutput(displayVal);
}
butFive.onclick = () => {
    checkEqual();
    displayVal += "5";
    printOutput(displayVal);
}
butSix.onclick = () => {
    checkEqual();
    displayVal += "6";
    printOutput(displayVal);
}
butSeven.onclick = () => {
    checkEqual();
    displayVal += "7";
    printOutput(displayVal);
}
butEight.onclick = () => {
    checkEqual();
    displayVal += "8";
    printOutput(displayVal);
}
butNine.onclick = () => {
    checkEqual();
    displayVal += "9";
    printOutput(displayVal);
}
butZero.onclick = () => {
    checkEqual();
    displayVal += "0";
    printOutput(displayVal);
}


