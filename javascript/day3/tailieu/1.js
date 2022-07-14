var boxes = [];
var player1 = [];
var player2 = [];
var clickedBox = [];
var turn = true;
const playerTurn = document.getElementById("playerturn");
const bgwin = document.getElementById('bgwin');
const noti = document.getElementById('notification');
for(let i=0;i<400;i++){
	var element = document.createElement("button");
	element.setAttribute("id",i);
	element.setAttribute("class","box");
	
	document.getElementById('container').appendChild(element);
	boxes.push(i);
}

for(let i = 0;i<400;i++){
	element = document.getElementById(i);
	element.addEventListener("click",function(){
		click(i);
	});
}

function click(index){
	if(clickedBox.includes(index)){
		return;
	}
	clickedBox.push(index);
	if(turn == true){
		document.getElementById(index).classList.add('clickX');
		player1.push(index);
		checkWin(player1,index);
		playerTurn.innerHTML = "Blue player turn";
		playerTurn.className = "notiblue";
	}
	else{
		document.getElementById(index).classList.add('clickO');
		player2.push(index);
		checkWin(player2,index);
		playerTurn.innerHTML = "Red player turn";
		playerTurn.className = "notired";
	}
	turn = !turn;
}

function checkWin(player,index){
	if(supportCheckwin(player,index-4,index+4,1)){
		win();
		return;
	}
	if(supportCheckwin(player,index-80,index+80,20)){
		win();
		return;
	}
	if(supportCheckwin(player,index-84,index+84,21)){
		win();
		return;
	}
	if(supportCheckwin(player,index-76,index+76,19)){
		win();
		return;
	}
}

function supportCheckwin(player,from,to,step){
	var count = 0;
	for(var j = from;j<=to;j+=step){
		if(j<0) continue;
		if(player.includes(j)) count++;
		else count = 0;

		if(count == 5){
			return true; 
		}
	}
	return false;
}

function win(){
	noti.innerHTML = turn?"RED WIN":"BLUE WIN";
	noti.className=turn?"notired":"notiblue";
	bgwin.classList.add("win");
}

function restart(){
	location.reload();
	noti.innerHTML = "";
	bgwin.classList.remove("win");
}
