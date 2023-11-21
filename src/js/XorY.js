const container =
  document.querySelector('.js-content');

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

let player = 'X';
let markup = '';

for (let i = 1; i < 10; i += 1) {
  markup += `<div class="item js-item" data-id="${i}"></div>`;
}

container.innerHTML = markup;

container.addEventListener(
  'click',
  onClick
);

function onClick(event) {
  const { target } = event;
  if (
    !target.classList.contains(
      'js-item'
    ) ||
    target.textContent
  ) {
    return;
  }

  target.textContent = player;
  player = player === 'X' ? '0' : 'X';
}
