"use strict";
var sizeSquare = 3,
    player = 'X',
    boxes = [],
    filled = 0;

newGame();

function newGame() {
    sizeSquare = +(prompt('Field size', 3));
    showTable();
}

function showTable() {
    boxes = [
        [sizeSquare],
        [sizeSquare]
    ];
    var table = document.createElement('table');
    table.setAttribute('border', 1);
    table.setAttribute('cellspacing', 0);
    for (var i = 0; i < sizeSquare; i++) {
        boxes[i] = [];
        var row = document.createElement('tr');
        table.appendChild(row);
        for (var j = 0; j < sizeSquare; j++) {
            var cell = document.createElement('td');
            cell.classList.add(i, j);
            cell.addEventListener('click', record);
            row.appendChild(cell);
            boxes[i][j] = null;
        }
    }
    document.getElementById("tictactoe").appendChild(table);
}

function record() {
    var cell = event.target;
    var arr = cell.className.split(" ");
    readingClassList(arr);
}

function readingClassList(arr) {
    var i = +arr[0];
    var j = +arr[1];
    if (arr[1] === undefined)
        j = i;
    turn(i, j);
}

function turn(i, j) {
    if (boxes[i][j] === null) {
        filled++;
        boxes[i][j] = player === 'X' ? 'X' : 'O';
        event.target.style.background = player === 'X' ? 'green' : 'red';
        event.target.textContent = player === 'X' ? 'X' : 'O';
        setTimeout(function () {
            if (checkWin(player)) {
                alert('Win ' + player);
                window.location.reload();
            } else if (filled == sizeSquare * sizeSquare) {
                alert('New Game');
                window.location.reload();
            }
            player = boxes[i][j] === 'X' ? 'O' : 'X';
            document.getElementById("player").textContent = 'Player ' + player;
        }, 0);
    }
    console.log(boxes[i][j]);
}

function checkWin(player) {
    var diagonal = 0;
    var diagonal1 = 0;
    for (var i = 0; i < sizeSquare; i++) {
        var horizont = 0;
        var vertical = 0;
        if (boxes[i][i] === player) diagonal++;
        if (boxes[i][sizeSquare - 1 - i] === player) diagonal1++;
        for (var j = 0; j < sizeSquare; j++) {
            if (boxes[i][j] === player) horizont++;
            if (boxes[j][i] === player) vertical++;
        }
        if (horizont === sizeSquare || vertical === sizeSquare) return true;
    }
    if (diagonal === sizeSquare || diagonal1 === sizeSquare) return true;
    return false;
}
