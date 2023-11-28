const container =
  document.querySelector('.js-content');
  const nameWinner = document.querySelector('.js-winner')

let player = 'X';
let historyX = [];
let historyO = [];

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function createMarkup() {
  let markup = '';
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();

container.addEventListener(
  'click',
  onClick
);

function onClick(event) {
  const { target } = event;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }
 
  const id = Number(target.dataset.id);
  let result = false;
  const isEndGame = historyO.length + historyX.length === 9;

  if (player === 'X') {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  target.textContent = player;

  if (result) {
    nameWinner.textContent = `winner ${player} 😎`;
    setTimeout(() => {
      resetGame();
      }, 1500);
    
    return;
  } else if (isEndGame) {
    console.log(`Try again 😮`);
    resetGame();
    return;
  }
  player = player === 'X' ? '0' : 'X';
}

function isWinner(arr) {
  return wins.some((item) =>
    item.every((id) => arr.includes(id))
  );
}

function resetGame() {
  createMarkup();
  historyX = [];
  historyO = [];
  player = 'X';
}
