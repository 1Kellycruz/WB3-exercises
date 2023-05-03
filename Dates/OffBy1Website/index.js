// handle the button click
// in event handler get value in the input box
// display value as a string in the paragraph 
// chnage code to convert the string to a date
// then display it usinf toString()

const dateBtnEl = document.getElementById('Button');
dateBtnEl.onclick = onButtonClicked;

function onButtonClicked() {
    const inputEl = document.getElementById('date');
    //console.log(inputEl.value);
    const dateInput = new Date('2023-05-02');

    const messageEl = document.getElementById('message');
    messageEl.innerHTML = dateInput.toLocaleString();
}
