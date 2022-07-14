const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

class Board{
    constructor(cellWidth, row, col){
        this.cellWidth = cellWidth;
        this.row = row;
        this.col = col;

        canvas.width = this.col * this.cellWidth;
        canvas.height = this.row * this.cellWidth;
    
        this.data = [];
        this.createArr();
        this.xTurn = true;
        this.count = 0;
        this.Turn = 1;
    }

    createArr(){
        for(let i=0; i<this.row; i++){
            this.data[i] = [];
            for(let j=0; j< this.col; j++){
                this.data[i][j] = 0;
            }
        }
        console.log(this.data);
    }

    drawGrid() {
        c.lineWidth = 1;
        //horizontal line
        for(let i=0;i<=this.row;i++){
            c.beginPath();
            if(i === 0 || i === this.row){
                c.strokeStyle = '#000';
            } else{
                c.strokeStyle = '#777';
            }
            c.moveTo(0,i*this.cellWidth);
            c.lineTo(this.col*this.cellWidth,i*this.cellWidth);
            c.stroke();
            c.closePath();
        }
        //vertical line
        for(let j=0;j<=this.col;j++){
            c.beginPath();
            if(j === 0 || j === this.col){
                c.strokeStyle = '#000';
            } else{
                c.strokeStyle = '#777';
            }
            c.moveTo(j*this.cellWidth,0);
            c.lineTo(j*this.cellWidth,this.row*this.cellWidth);
            c.stroke();
            c.closePath();
        }
    }

    handleClick(e){
        let x = e.offsetX;
        let y = e.offsetY;
        
        let i = Math.floor(y / this.cellWidth);
        let j = Math.floor(x / this.cellWidth);

        if(i >= 0 && j >= 0 && this.data[i][j] === 0){
            if(this.xTurn){
                this.data[i][j] = 1;
            }else{
                this.data[i][j] = 2;
            }
            this.xTurn = !this.xTurn;    
        }
    }

    drawXO() {
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data.length; j++) {
                if (this.data[i][j] === 1) {
                    this.drawX(i, j);
                } else if (this.data[i][j] === 2) {
                    this.drawO(i, j);
                }
            }
        }
    }

    drawX(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;
    
        c.strokeStyle = "#123456";
        c.lineWidth = 3;
    
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.2);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.8);
        c.stroke();
        c.closePath();
    
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.8);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.2);
        c.stroke();
        c.closePath();
    }

    drawO(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;
    
        c.beginPath();
        c.strokeStyle = "red";
        c.lineWidth = 3;
        c.arc(
            x + this.cellWidth / 2,
            y + this.cellWidth / 2,
            this.cellWidth * 0.3,
            0,
            2 * Math.PI
        );
        c.stroke();
        c.closePath();
    }

    winCheck_Un(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.Turn = 2;
        }
        else if (this.xTurn === false) {
            this.Turn = 1;
        }

        if (this.data [i+1+n][j] === 1 && this.Turn === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i+1+n][j] === 2 && this.Turn === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }

    winCheck_Up(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        
        if (n === undefined) {
            var n = 0;
        }

        if (this.xTurn === true) {
            this.Turn = 2;
        }
        else if (this.xTurn === false) {
            this.Turn = 1;
        }

        if (this.data [i-1-n][j] === 1 && this.Turn === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i-1-n][j] === 2 && this.Turn === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }



    winCheck_main(e) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (this.xTurn === true) {
            this.Turn = 2;
        }
        else if (this.xTurn === false) {
            this.Turn = 1;
        }
        var temp_count = 0;
        if (this.winCheck_Un(e) === this.Turn || this.winCheck_Up(e) === this.Turn) {
            console.log('check2')
            for ( let n = 0; this.winCheck_Up(e, n) === this.Turn && n <= 4; n++) {
                if (this.winCheck_Up(e, n) === this.Turn) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    console.log('up checked. end ' + temp_count)
                    break;
                }
            }
            if (this.winCheck_Un(e, n) === this.Turn) {
                
            for ( var n = 0; n <= 4; ++n) {
                
                if (this.winCheck_Un(e, n) === this.Turn) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    console.log('un checked. end ' + temp_count);
                    break;
                }
            }
            }
            if (temp_count === 4) {
                console.log('win');
                if (this.Turn === 1) {
                setTimeout(function(){                 
                    if(alert('X won!')){}
                else window.location.reload(); }, 100);
                }
                else {
                    setTimeout(function(){                 
                        if(alert('O won!')){}
                    else window.location.reload(); }, 100);
                }
            }
            else {
                var temp_count = 0;
                return; 
            }
        }
    }   
}

const board = new Board(40, 10 , 10);
board.drawGrid();

canvas.addEventListener('click' , function(e){
    board.handleClick(e); 
    board.winCheck_main(e);
})

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
    board.drawGrid();
    board.drawXO();
}

animate();