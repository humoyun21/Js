
function insert(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Xato kiritish!');
        clearDisplay();
    }
}
document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (!isNaN(key) || key === '.') {
        insert(key);
    }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        insert(key);
    }
    if (key === 'Enter') {
        calculate();
    }
    if (key === 'Backspace') {
        deleteLast();
    }
    if (key === 'Escape') {
        clearDisplay();
    }
    if (key === 'r') {
        insert('Math.sqrt(');
    }
    if (key === 'p') {
        insert('Math.PI');
    }
    if (key === 's') {
        insert('Math.sin(');
    }
    if (key === 'c') {
        insert('Math.cos(');
    }
    if (key === 't') {
        insert('Math.tan(');
    }
});
