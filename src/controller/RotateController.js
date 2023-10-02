export default function rotate(model, direction) {
    if (typeof model.board.group.x !== 'undefined'){
        let x = model.board.group.x;
        let y = model.board.group.y;
        // if squares have colors on them then rotate only
        model.board.rotate(x, y, direction);
        model.moveCount+=1
    }
}

