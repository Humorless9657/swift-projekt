import './style-index.css';
import { upperScreen, boardScreen } from './home';
import { initializeGame } from './game';

upperScreen();
boardScreen();

const restartButton = document.getElementById('restart-btn');
restartButton.addEventListener('click', (e) => {
    e.currentTarget.textContent = 'Restart Game'

    // removes existing boards
    const grids = document.querySelectorAll('.grid-container');
    if (grids.length === 2) {
        grids[0].remove();
        grids[1].remove();
        document.getElementById('info').textContent = '';
    }
    
    initializeGame();
})