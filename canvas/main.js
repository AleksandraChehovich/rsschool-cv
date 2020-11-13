const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector('.clear');
const colorPanel = document.querySelector('.colors');
let colorBtn = 'white';
let inProcess = false;
let lastX = 0;
let lastY = 0;
console.log(canvas);
console.log(colorBtn);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

function write (e) {

    if (!inProcess) return;

    ctx.strokeStyle = colorBtn;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.layerX, e.layerY);
    ctx.stroke();
    lastX = e.layerX;
    lastY = e.layerY;
}

function clear() {
    location.reload();
}

function startWriting(e) {
    inProcess = true;
    lastX = e.layerX;
    lastY = e.layerY;
}

function stopWriting() {
    inProcess = false;
}

colorPanel.onclick = function (e) {
    let elem = e.target;
    if (elem.tagName === 'BUTTON') {
        colorBtn = elem.dataset.color;
        console.log(colorBtn);
    } 
}

canvas.addEventListener('mousemove', write);
canvas.addEventListener('mousedown', startWriting);
canvas.addEventListener('mouseup', stopWriting);
clearBtn.addEventListener('click', clear);
