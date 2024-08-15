document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector('.grid-container');
    const resetButton = document.getElementById('reset-button');
    const gridSize = 960; // Total size of the grid in pixels

    function createGrid(squaresPerSide) {
        // Clear the existing grid
        gridContainer.innerHTML = '';

        const squareSize = gridSize / squaresPerSide - 2; // Calculate the size of each square (subtracting the gap)
        gridContainer.style.width = `${gridSize}px`;
        gridContainer.style.height = `${gridSize}px`;

    for (let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
        gridItem.style.width = `${squareSize}px`;
            gridItem.style.height = `${squareSize}px`;
    }
    addDrawingFunctionality();
}

function addDrawingFunctionality() {
    let isDrawing = false;

    gridContainer.addEventListener('mousedown', () => {
        isDrawing = true;
    });

    gridContainer.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    gridContainer.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    gridContainer.addEventListener('mouseover', (e) => {
        if (isDrawing && e.target.classList.contains('grid-item')) {
            e.target.style.backgroundColor = '#000000';
        }
    });

    gridContainer.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('grid-item')) {
            e.target.style.backgroundColor = '#000000';
        }
    });
}
resetButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt('Enter the number of squares per side for the new grid (maximum 100):'), 10);
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(squaresPerSide);
    }
});

// Initial grid setup
createGrid(16);
});
