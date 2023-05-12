function upperScreen() {
    const content = document.getElementById('content');

    const top = document.createElement('div');
    top.id = 'top';
    top.textContent = 'Battleship Game';

    content.appendChild(top);
}

function boardScreen() {
    const content = document.getElementById('content');

    const mid = document.createElement('div');
    mid.id = 'mid';
    const boards = document.createElement('div');
    boards.id = 'boards';
    const info = document.createElement('div');
    info.id = 'info';

    // const blocks = document.createElement('div');
    // blocks.id = 'blocks';

    const button = document.createElement('button');
    button.id = 'restart-btn';
    button.textContent = 'Start Game';

    mid.appendChild(boards);
    // mid.appendChild(blocks);
    mid.appendChild(info);
    mid.appendChild(button);
    content.appendChild(mid);
}

export { upperScreen, boardScreen };