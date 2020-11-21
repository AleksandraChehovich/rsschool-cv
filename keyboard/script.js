const keyboard = document.querySelector('.keyboard');
const textForm = document.querySelector('.text');
let string = '';

function openKeyboard() {
    keyboard.classList.add('open');
    console.log('hi');
}

function closeKeyboard() {
    keyboard.classList.remove('open');
}

// function enterText(e) {
//     console.log(this);
//     // string += this.dataset.key;
//     // textForm.innerHTML = string;
// }

// function delite() {

// }

keyboard.onclick = function(e) {
    const btn = e.target;

    if (btn.dataset.option === 'close') {
        closeKeyboard();
    }

}

// keyboard.onclick = function(e) {
//     const btn = e.target;
//     if (btn.tagName !== 'BUTTON') return null;

//     if (btn.dataset.key) {
//         enterText(e);
//     }

//     if (btn.dataset.option === 'close') {
//         closeKeyboard();
//     }

//     if (btn.dataset.option === 'enter') {

//     }

//     if (btn.dataset.option === 'delite') {

//     }
    
// }

textForm.addEventListener('mousedown', openKeyboard);
