var N_SIZE = 5,
player ='X';
/**
 * Show table tic-tac
 */
function showTable(){
    var boxes = [[N_SIZE],[N_SIZE]];
    var table = document.createElement('table');
    table.setAttribute('border',1);
    table.setAttribute('cellspacing',0);
    for(var i = 0; i < N_SIZE ; i++){
        if(!boxes[i])
            boxes[i]=[];
        var row = document.createElement('tr');
        table.appendChild(row);
        for(var j = 0; j<N_SIZE;j++){
            var cell = document.createElement('td');
            cell.classList.add( i,j);
            cell.addEventListener('click',record);
            row.appendChild(cell);            
            boxes[i][j]=1;
           // console.log(boxes[i][j]);
        }        
    }
    document.getElementById("tictactoe").appendChild(table);
}
/*
* New game
*/
function NewGame(){
 N_SIZE =  prompt('Size', 5); 
 showTable();
} 
/*
 * Write player
 */
function record(){
player = player ==='X'?'O':'X';
document.getElementById("player").textContent='Player '+player;
}
NewGame();

