document.addEventListener('DOMContentLoaded', function () {
    // Luas Persegi
    const countLuasButton = document.querySelector('.countLuasButton');
    const resetLuasButton = document.querySelector('.resetLuasButton');
    const squareSideInput = document.getElementById('squareSide');

    countLuasButton.addEventListener('click', function () {
        hitungLuas();
    });

    resetLuasButton.addEventListener('click', function () {
        resetLuas();
    });

    // Keliling Persegi
    const countKelilingButton = document.querySelector('.countKelilingButton');
    const resetKelilingButton = document.querySelector('.resetKelilingButton');
    const squareSideKelilingInput = document.getElementById('squareSideKeliling');

    countKelilingButton.addEventListener('click', function () {
        hitungKeliling();
    });

    resetKelilingButton.addEventListener('click', function () {
        resetKeliling();
    });

    function hitungLuas() {
        const sideLength = parseFloat(squareSideInput.value);
        const result = sideLength * sideLength;
        alert(`Luas Persegi: ${result}`);
    }

    function resetLuas() {
        squareSideInput.value = '';
    }

    function hitungKeliling() {
        const sideLength = parseFloat(squareSideKelilingInput.value);
        const result = 4 * sideLength;
        alert(`Keliling Persegi: ${result}`);
    }

    function resetKeliling() {
        squareSideKelilingInput.value = '';
    }
});
