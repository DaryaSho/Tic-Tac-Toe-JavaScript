
var N_SIZE = 5;

function showTable(){
    boxes[N_SIZE,N_SIZE];
    var table = document.createElement('table');
    table.setAttribute('border',1);
    table.setAttribute('cellspacing',0);
    for(var i = 0; i < N_SIZE ; i++){
        var row = document.createElement('tr');
        table.appendChild(row);
        for(var j=0; j<N_SIZE;j++){
            var cell = document.createElement('td');
            row.appendChild(cell);
        }
    }
    document.getElementById("tictactoe").appendChild(table);
}
/*
* New game
*/

function NewGame(){
 N_SIZE =  prompt('Size', 100); 
 showTable();
} 

 NewGame();
