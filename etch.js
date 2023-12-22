// initial loading of canvas
const DEFAULT_TILES = 64;
loadCanvas(DEFAULT_TILES);

// button which prompts the user for a new resolution
const resolutionButton = document.querySelector('#resolution-button');
resolutionButton.addEventListener('click', () => loadCanvas())

// loads canvas
function loadCanvas() {
    // container which is meant to only contain drawing board
    const boardContainer = document.querySelector('#board-container');

    // drawing board itself
    const drawingBoard = document.createElement('div');
    drawingBoard.setAttribute('class', 'drawing-board');

    // if num_pixels is passed as a parameter, use it, otherwise prompt user
    let num_tiles;
    if (arguments[0]) { num_tiles = arguments[0]; } 
    else { 
        num_tiles = parseInt(prompt('How many tiles wide do you want the canvas to be?')); 
        boardContainer.removeChild(boardContainer.firstChild);
    }
    
    // fills the board with "grid pixels"
    for (let i = 0; i < num_tiles; i++) {
        const grid_row = document.createElement('div');
        grid_row.setAttribute('class', 'grid-row');
        for (let j = 0; j < num_tiles; j++) {
            const grid_pixel = document.createElement('div');
            grid_pixel.setAttribute('class', 'grid-pixel');

            // if you hover over the pixel, then color it
            grid_pixel.addEventListener('mouseover', (e) => {
                draw (e);
            })
            grid_row.appendChild(grid_pixel);
        }
        drawingBoard.appendChild(grid_row);
    }
    boardContainer.appendChild(drawingBoard);
}

// fills in a given pixel
function draw(e) {
    e.target.setAttribute('style', 'background-color: blue;')
}