"use strict";
var size = 5,
    player = 'X',
    boxes = [],
    count = { countH: 0, countG: 0, countG1: 0, countG: 0, all: 0 };

newGame();

function newGame() {
    size = prompt('Size', 3);
    showTable();
}

function showTable() {
    boxes = [
        [size],
        [size]
    ];
    var table = document.createElement('table');
    table.setAttribute('border', 1);
    table.setAttribute('cellspacing', 0);
    for (var i = 0; i < size; i++) {
        boxes[i] = [];
        var row = document.createElement('tr');
        table.appendChild(row);
        for (var j = 0; j < size; j++) {
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
        count.all++;
        boxes[i][j] = player === 'X' ? 'X' : 'O';
        event.target.style.background = player === 'X' ? 'green' : 'red';
        event.target.textContent = player === 'X' ? 'X' : 'O';
        if (checkWin(player)) {
            alert('Win ' + player);
            window.location.reload();
        } else if (count.all == size * size) {
            alert('New Game');
            window.location.reload();
        }
        player = boxes[i][j] === 'X' ? 'O' : 'X';
        document.getElementById("player").textContent = 'Player ' + player;
    }
    console.log(boxes[i][j]);
}

function checkWin(player) {
    count.countG = 0;
    count.countG1 = 0;
    for (var i = 0; i < size; i++) {
        count.countH = 0;
        count.countV = 0;
        if (boxes[i][i] === player) count.countG++;
        if (boxes[i][size - 1 - i] === player) count.countG1++;
        for (var j = 0; j < size; j++) {
            if (boxes[i][j] === player) count.countV++;
            if (boxes[j][i] === player) count.countH++;
        }
        if (count.countH == size || count.countV == size) return true;
    }
    if (count.countG == size || count.countG1 == size) return true;
    return false;
}
