export default function redrawCanvas(model, canvasObj, appObj) {
    const ctx = canvasObj.getContext('2d');

    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect( 0,0, canvasObj.width, canvasObj.height);  // assume square region
    
    // Drawing the outline for the Board
    for (var row = 0; row < model.board.size; row++) {
        for (var column = 0; column < model.board.size; column++) {
        ctx.beginPath()
        ctx.rect(column * 60, row * 60, 60, 60);
        ctx.lineWidth=2;
        ctx.stroke();
        ctx.closePath();
        }
    }

    // Filling the Colors on Board
    for (let square of model.board.squares) {
        //Fills the squares with the appropriate colors
        ctx.beginPath()
        ctx.rect(square.column * 60, square.row * 60, 60, 60);
        if (square.color !== null){
            ctx.fillStyle = square.color;
            ctx.fill();

        }
        ctx.lineWidth=2;
        ctx.stroke();
        ctx.closePath();
    }

    // Color Red if Selected
    if (typeof model.board.group.x !== 'undefined'){
        //Draws the selected squares red
        ctx.beginPath();
        let x = model.board.group.x
        let y = model.board.group.y
        ctx.lineWidth=6;
        ctx.strokeStyle = "red";
        ctx.rect(y * 60,x * 60, 60, 60);
        ctx.stroke();
        ctx.rect((y-1) * 60,x * 60, 60, 60);
        ctx.stroke();
        ctx.rect(y * 60,(x-1) * 60, 60, 60);
        ctx.stroke();
        ctx.rect((y-1) * 60,(x-1) * 60, 60, 60);
        ctx.stroke();
        ctx.restore();
    }  

    // Drawing the Circles
    for (var i = 1; i < model.board.size; i++) {
        //Draws the inner circles
        for (var j = 1; j < model.board.size; j++) {
            ctx.beginPath();
            ctx.arc(60*i, 60*j, 10, 0, 2*Math.PI, false)
            ctx.fillStyle = 'white'
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.save();
        }   
    }

    if (typeof model.board.group.x !== 'undefined'){
        //Colors the inner selected circle red
        let x = model.board.group.x
        let y = model.board.group.y
        ctx.beginPath();
        ctx.arc(60*y, 60*x, 10, 0, 2*Math.PI, false)
        ctx.fillStyle='red';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    console.log(model.victory);
    if (model.victory){
        ctx.fillStyle = "red";
        ctx.font = "30px Arial";
        ctx.fillText("You Won!", 10, 50);
    }
}