const palette = document.querySelector('#palette');
const btn = document.querySelector('#btn');
const reset = document.querySelector('#reset');
const body = document.querySelector('#body');
const table = document.querySelector('#table');
let lastColors = [];
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem('colors')) !== null) {
        lastColors = JSON.parse(localStorage.getItem('colors'));
    } else {
        lastColors = ['#FFFFFF'];
    }
    chargeDOM();
    localStorage.setItem('colors', JSON.stringify(lastColors));
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.background = colorPicker();
    chargeDOM();
    localStorage.setItem('colors', JSON.stringify(lastColors));
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.background = '#FFFFFF';
    lastColors = ['#FFFFFF'];
    palette.textContent = '#FFFFFF';
    chargeDOM();
    localStorage.setItem('colors', JSON.stringify(lastColors));
})

const chargeDOM = () => {
    table.innerHTML = `
    <tr>
        <th>#Hexadecimal</th>
        <th>Last Colors</th>
    </tr>`;
    let c = 0;
    for (let i = lastColors.length; i > 0; i--) {
        table.innerHTML += `
        <tr>
            <td>${lastColors[i-1]}</td>
            <td id="${c}">${c}</td>
        </tr>
        `;
        c++;
        table.children[c].style.background = lastColors[i-1];
    }
    palette.textContent = lastColors[lastColors.length-1];
    body.style.background = lastColors[lastColors.length-1];
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

