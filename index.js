"use strict";
var sizeSquare = 3,
    player = 'X',
    boxes = [],
    number = { ofHorizont: 0, ofVertical: 0, oflDiagonal1: 0, ofDiagonal: 0, ofFilled: 0 };

newGame();

function newGame() {
    sizeSquare = prompt('Field size', 3);
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
        number.ofFilled++;
        boxes[i][j] = player === 'X' ? 'X' : 'O';
        event.target.style.background = player === 'X' ? 'green' : 'red';
        event.target.textContent = player === 'X' ? 'X' : 'O';
        if (checkWin(player)) {
            alert('Win ' + player);
            window.location.reload();
        } else if (number.ofFilled == sizeSquare * sizeSquare) {
            alert('New Game');
            window.location.reload();
        }
        player = boxes[i][j] === 'X' ? 'O' : 'X';
        document.getElementById("player").textContent = 'Player ' + player;
    }
    console.log(boxes[i][j]);
}

function checkWin(player) {
    number.ofDiagonal = 0;
    number.ofDiagonal1 = 0;
    for (var i = 0; i < sizeSquare; i++) {
        number.ofHorizont = 0;
        number.ofVertical = 0;
        if (boxes[i][i] === player) number.ofDiagonal++;
        if (boxes[i][sizeSquare - 1 - i] === player) number.ofDiagonal1++;
        for (var j = 0; j < sizeSquare; j++) {
            if (boxes[i][j] === player) number.ofVertical++;
            if (boxes[j][i] === player) number.ofHorizont++;
        }
        if (number.ofHorizont == sizeSquare || number.ofVertical == sizeSquare) return true;
    }
    if (number.ofDiagonal == sizeSquare || number.ofDiagonal1 == sizeSquare) return true;
    return false;
}
