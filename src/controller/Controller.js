function isClickInsideCircle(X, Y, circleX, circleY) {
    /*Given X and Y coordiantes, checks if the click is in a circle*/
    // Calculate the distance between the click coordinates and the circle's center
    const distance = Math.sqrt((X - circleX) ** 2 + (Y - circleY) ** 2); 
    // Check if the distance is less than or equal to the radius.
    return distance <= 10;
}

export default function processClick(model, canvas, x, y) {
    /*Processes click by identifying the group selected based on click x and y coordinate */
    for (var i = 1; i < model.board.size; i++) {
        for (var j = 1; j < model.board.size; j++) {
            if (isClickInsideCircle(x, y, 60*j, 60*i)){
                model.board.group.setGroup(parseInt(i) ,parseInt(j));
            }
        }   
    }

}