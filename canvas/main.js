const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector('.clear');
const colorPanel = document.querySelector('.colors');
const linesWidth = document.querySelectorAll('.lineWidth');
const eraser = document.querySelector('.eraser');
let colorBtn = 'white';
let inProcess = false;
let lastX = 0;
let lastY = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

function draw (e) {

    if (!inProcess) return;

    ctx.strokeStyle = colorBtn;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.layerX, e.layerY);
    ctx.stroke();
    lastX = e.layerX;
    lastY = e.layerY;
}

// function clear() {
//     location.reload();
// }

function clear() {
    ctx.clearRect(0, 0, 800, 600);
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
    if (elem.classList.contains('color')) {
        colorBtn = elem.dataset.color;
        linesWidth.forEach(line => line.style.backgroundColor = colorBtn);
    } else if (elem.classList.contains('lineWidth')) {
        ctx.lineWidth = elem.dataset.width;
    }
}

eraser.onclick = function (e) {
    colorBtn = 'black';
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', startWriting);
canvas.addEventListener('mouseup', stopWriting);
clearBtn.addEventListener('click', clear);
