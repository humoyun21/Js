document.getElementById('countButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const keyCounts = countKeys(textInput);
    displayResults(keyCounts);
});

function countKeys(text) {
    const counts = {};
    const cleanedText = text.replace(/[\s]/g, '');

    for (const key of cleanedText) {
        counts[key] = counts[key] ? counts[key] + 1 : 1;
    }

    return counts;
}

function displayResults(keyCounts) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    if (Object.keys(keyCounts).length === 0) {
        resultContainer.innerHTML = '<p style="color: red; text-align: center;">Hech qanday nsrsa topilmadi!</p>';
        return;
    }

    for (const key in keyCounts) {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerText = `${key}: ${keyCounts[key]} marta`;
        resultContainer.appendChild(resultItem);
    }
}
