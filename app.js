const palette = document.querySelector('#palette');
const btn = document.querySelector('#btn');
const reset = document.querySelector('#reset');
const body = document.querySelector('#body');
let lastColors = [];
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem('colors')) !== null) {
        lastColors = JSON.parse(localStorage.getItem('colors'));
    } else {
        lastColors = ['#FFFFFF'];
    }
    localStorage.setItem('colors', JSON.stringify(lastColors));
    chargeDOM();
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.background = colorPicker();
    localStorage.setItem('colors', JSON.stringify(lastColors));
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.background = '#FFFFFF';
    lastColors = ['#FFFFFF'];
    palette.textContent = '#FFFFFF';
    localStorage.setItem('colors', JSON.stringify(lastColors));
})

const chargeDOM = () => {
    for (let i = lastColors.length; i > 0; i--) {
        console.log(lastColors[i-1]);
    }
}

const colorPicker = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += arr[Math.floor(Math.random() * 16)];
    }
    palette.textContent = color;
    if (lastColors.length == 10) {
        lastColors.shift();
        lastColors.push(color);
    } else {
        lastColors.push(color);
    }
    return color;
}

