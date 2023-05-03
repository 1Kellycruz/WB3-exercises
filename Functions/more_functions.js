function displayMailingLabel(name1, address, city, state, zip) {
    console.log(name1);
    console.log(address);
    console.log(`${city}, ${state}, ${zip}`);
}

displayMailingLabel("kelly Cruz", "2413 East 26th st", "New York City", "New York", "11235");


function addNumbers(num1, num2) {
    if (isNaN(+num1) || isNaN(+num2)) {
        throw new error
    }
    const sum = num1 + num2;
    console.log(`${num1} + ${+num2} = ${sum}`)
}

addNumbers(3, 5);
addNumbers(10, 15);

function displayReceipt(totalDue, amountPaid) {
    const changeDue = totalDue - amountPaid;

    console.log(`Total Due: ${totalDue.toFixed(2)}`)
    console.log(`Amount Paid: ${amountPaid.toFixed(2)}`)

    if (changeDue <= 0) {
        console.log(`change Due: ${Math.abs(changeDue)}`);
    } else {
        console.log(`Owed Amount: ${Math.abs(changeDue).toFixed(2)}`);
    }
}

const totalDue = 15 

const tooMuch = 20
const tooLittle = 10
const justRight = 15

displayReceipt(totalDue, tooMuch);
displayReceipt(totalDue, tooLittle);
displayReceipt(totalDue, justRight);