export function handleClick(e, cellState) {
  e.preventDefault();
  // e.stopImmediatePropagation();
  // if (!this.timerIsStarted) {
  //   this.timerId = launchTimer(this.main.timerElement, this.main.timerElement.innerText);
  //   this.timerIsStarted = true;
  // }
  if (e.pointerType === 'mouse' && e.type === 'pointerup') return handleMouseClick(e, cellState);
  if (e.pointerType === 'touch') return handleTouchClick(e, cellState);
  // this.fillStartField(e);
  // this.checkEndGame();
  return 'cell';
}

function handleMouseClick(e, startCellState) {
  if (startCellState !== 'cell cell_dark' && e.button === 0) return 'cell cell_dark';
  if (startCellState !== 'cell cell_crossed' && e.button === 2) return 'cell cell_crossed';
  // this.handleCellSound(e);
  return 'cell';
}

let timeStart;
let timeEnd;

function handleTouchClick(e, startCellState) {
    let time;
    if (e.type === 'pointerdown') {
      timeStart = e.timeStamp;
    }
    if (e.type === 'pointerup') {
      timeEnd = e.timeStamp;
      time = timeEnd - timeStart;
      if (startCellState !== 'cell cell_dark' && time < 500) return 'cell cell_dark';
      if (startCellState !== 'cell cell_crossed' && time >= 500) return 'cell cell_crossed';
      // this.handleCellSound(e);
      return 'cell';
    }
}
