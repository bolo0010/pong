export const pointsToWin = [
  { key: 1, value: 1 },
  { key: 3, value: 3 },
  { key: 5, value: 5 },
];
export const difficulty = [
  { key: "easy", value: "easy" },
  { key: "medium", value: "medium" },
  { key: "hard", value: "hard" },
];
export const ballRadius = 10;
export const paddleWidth = 100;
export const paddleColor = "white";
export const ballColor = "white";

export const easySpeedBall = 2;
export const mediumSpeedBall = 3;
export const hardSpeedBall = 4;

export const easySpeedDebugBall = 2.1;
export const mediumSpeedDebugBall = 3.2;
export const hardSpeedDebugBall = 4.25;

export const gameField = document.querySelector(".game-field");

export const canvas = document.querySelector(".game-field__canvas");
export const gameFieldInnerHeight = gameField.clientHeight;
export const gameFieldInnerWidth = gameField.clientWidth;
