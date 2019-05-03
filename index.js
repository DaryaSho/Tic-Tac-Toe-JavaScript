var N_SIZE = 5,
player ='X',
count=0;
boxes=new Array();
/**
 * Show table tic-tac
 */
function showTable(){
    boxes = [[N_SIZE],[N_SIZE]];
    var table = document.createElement('table');
    table.setAttribute('border',1);
    table.setAttribute('cellspacing',0);
    for(var i = 0; i < N_SIZE ; i++){
            boxes[i]=[];
        var row = document.createElement('tr');
        table.appendChild(row);
        for(var j = 0; j<N_SIZE;j++){
            var cell = document.createElement('td');
            cell.classList.add( i,j);
            cell.addEventListener('click',record);
            row.appendChild(cell);            
            boxes[i][j]=1;
        }        
    }
    document.getElementById("tictactoe").appendChild(table);
}
/*
* New game
*/
function NewGame(){
 N_SIZE =  prompt('Size', 3); 
 showTable();
} 
/*
 * Write player
 */
function record(){
    cell = event.target;     
    arr = cell.className.split(" ");
    readingClassList(arr);    
}

/*
* record turn and name class in array
 */
function readingClassList(arr){
    i = +arr[0];
    j = +arr[1];
    if(arr[1]===undefined) 
        j=i;
    turn(i,j);
} 

function turn(i,j){
    if(checkCell(i,j)) {
        count++;
        boxes[i][j]=player ==='X'?'X':'O'; 
        event.target.style.background= player ==='X'?'green':'red';
        event.target.textContent= player ==='X'?'X':'O'; 
        if(checkWin(player)){
            alert('Win '+player);
            window.location.reload();
        }
        if(count==N_SIZE*N_SIZE) {
            alert('New Game');  
            window.location.reload();
        }
        player = boxes[i][j] ==='X'?'O':'X'; 
        document.getElementById("player").textContent='Player '+player;      
    } 
    console.log(boxes[i][j]);     
}
/**
 * Win check
 */
function checkWin(a){  
    countG=0; 
    for(var i = 0; i < N_SIZE ; i++){
        countV=0;
        countH=0;
        if(boxes[i][i]===a)countG++;
        for(var j = 0; j<N_SIZE;j++){
            if (boxes[i][j]===a) countV++;
            if (boxes[j][i]===a) countH++;
        }
        if(countH==N_SIZE||countV==N_SIZE)return true;
    }
   if(countG==N_SIZE) return true; 
    return false; 
}

/**
 * Empty cell check
 */
function  checkCell(i,j){
    if(boxes[i][j]===1)return true;
    else return false;
}
NewGame();


