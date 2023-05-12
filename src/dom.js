function generateGrid(size, player, container, playableClass = null) {
    const content = document.getElementById(container);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    gridContainer.classList.add(player);
    const playerName = document.createElement('div');
    playerName.classList.add('grid-name');
    playerName.textContent = player + `'s board`;
    const grid = document.createElement('div');
    grid.classList.add('grid');
    
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0; j < size; j++) {
            let gridRowElement = document.createElement('div');
            gridRowElement.classList.add('grid-row-element');
            gridRowElement.classList.add('grid-row-element-' + player);
            gridRowElement.setAttribute('x-cord', i);
            gridRowElement.setAttribute('y-cord', j);
            if (playableClass !== null) {
                gridRowElement.classList.add(playableClass);
            }
            gridRow.appendChild(gridRowElement);
        }
        grid.appendChild(gridRow);
    }

    gridContainer.appendChild(playerName);
    gridContainer.appendChild(grid);

    // create main container for player blocks
    if (playableClass === null) {
        const blocks = document.createElement('div');
        blocks.id = 'blocks';
        gridContainer.appendChild(blocks);
    }

    content.appendChild(gridContainer);
}

// returns coordinates when the user selects a box on the board
function playerMove(gridElementClass) {
    return new Promise ((resolve) => {
        const gridElement = document.querySelectorAll(gridElementClass);
    
        let values = [];
        gridElement.forEach(element => element.addEventListener('click', (e) => {
            let x = parseInt(e.currentTarget.getAttribute('x-cord'));
            let y = parseInt(e.currentTarget.getAttribute('y-cord'));
            if (values.length === 2) {
                resolve(values);
            } else {
                values.push(x, y);
                e.currentTarget.classList.remove(gridElementClass.substring(1));
                if (values.length === 2) {
                    resolve(values);
                }
            }
        }));
    })
}

// takes a gameboard array (from the player or computer object)
// iterates through the array and changes the grid accordingly by adding classes to the elements
function updateBoard(gameboard, gridClass) {
    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard.length; j++) {
            let gridElement = document.querySelector(`.${gridClass}[x-cord="${i}"][y-cord="${j}"]`);
            if (gameboard[i][j].hit === true && gameboard[i][j].hasSunkShip === true) {
                gridElement.classList.add('sunk');
            } else if (gameboard[i][j].hit === true && gameboard[i][j].shipID !== null) {
                gridElement.classList.add('hit');
            } else if (gameboard[i][j].hit === true && gameboard[i][j].shipID === null) {
                gridElement.classList.add('miss');
            }
        }
    }
}

// displays ships on the grid (for random player ship placement)
function updateBoardShips(gameboard, gridClass) {
    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard.length; j++) {
            let gridElement = document.querySelector(`.${gridClass}[x-cord="${i}"][y-cord="${j}"]`);
            if (gameboard[i][j].shipID !== null) {
                gridElement.classList.add('ship');
            }
        }
    }
}

function displayGameResults(infoElement, computerObject) {
    const results = document.getElementById(infoElement);
    if (computerObject.board.areAllShipsSunk() === true) {
        results.textContent = 'Player won!';
    } else {
        results.textContent = 'Computer won!';
    }
}

function createBlock(size, customID = size) {
    const blockContainer = document.createElement('div');
    blockContainer.classList.add('block-container');
    blockContainer.id = `block-container-${customID}`;

    for (let i = 0; i < size; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        blockContainer.appendChild(block);
    }

    blockContainer.draggable = true;
    return blockContainer;
}

// creates a new button and returns the dom element
function createButton(text) {
    const button = document.createElement('button');
    let id = `${text}-button`;
    button.textContent = `${text}`;
    button.id = id;
    const infoDiv = document.getElementById('info');
    infoDiv.appendChild(button);

    return document.getElementById(id);
}

// width of block containers = number of blocks * their size; fixes container width issue on Chrome
function setBlockContainerWidthHeight(vertical = false) {
    const blockContainers = document.querySelectorAll('.block-container');
    const blockWidth = 40;
    for (let i = 0; i < blockContainers.length; i++) {
        const blockLength = blockContainers[i].getElementsByTagName('div').length;

        if (vertical === false) {
            blockContainers[i].style.width = `${blockLength * blockWidth}px`;
            blockContainers[i].style.height = `40px`;
        } else {
            blockContainers[i].style.height = `${blockLength * blockWidth}px`;
            blockContainers[i].style.width = `40px`;
        }
    }
}

export { 
    generateGrid, 
    playerMove, 
    updateBoard, 
    updateBoardShips, 
    displayGameResults, 
    createBlock, 
    createButton, 
    setBlockContainerWidthHeight 
};