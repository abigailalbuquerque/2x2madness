import { config_4x4, config_5x5, config_6x6 } from "../configs"

export class Group {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    setGroup(x,y){
        this.x = x;
        this.y=y;
    }
}

export class Square {
    constructor (r, c, color) {
        this.row = r
        this.column = c
        this.color = color
    }
}

export class Board {
    constructor (config) {
        this.squares = []
        this.size = parseInt(config.numColumns)
        this.group = new Group()

        for (let csq of config.baseSquares) {
            //  { "color" : "green", "row": "0", "column" : "0" },
            let sq = new Square(parseInt(csq.row), parseInt(csq.column), csq.color)
            this.squares.push(sq)
        }
    }

    rotate(x, y, direction){
        if (direction === 'clockwise'){
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y-1) {
                    var tempColor1 = square.color;
                }
            }
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y) {
                    var tempColor2 = square.color;
                    square.color= tempColor1;
                }
            }
            for (let square of this.squares) {
                if (square.row === x && square.column === y) {
                    var tempColor3 = square.color;
                    square.color=tempColor2;
                }
            }
            for (let square of this.squares) {
                if (square.row === x && square.column === y-1) {
                    var tempColor4 = square.color;
                    square.color=tempColor3;
                }
            }
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y-1) {
                    square.color=tempColor4;
                }
            }
        }
        if (direction === 'counterclockwise'){
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y-1) {
                    var tempColor1 = square.color;
                }
            }
            for (let square of this.squares) {
                if (square.row === x && square.column === y-1) {
                    var tempColor4 = square.color;
                    square.color=tempColor1;
                }
            }
            for (let square of this.squares) {
                if (square.row === x && square.column === y) {
                    var tempColor3 = square.color;
                    square.color=tempColor4;
                }
            }
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y) {
                    var tempColor2 = square.color;
                    square.color= tempColor3;
                }
            }
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y-1) {
                    square.color=tempColor2;
                }
            }
        }
        }

        isAllSameColor(x, y){
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y-1) {
                    var color1 = square.color;
                }
                if (square.row === x && square.column === y-1) {
                    var color2 = square.color;
                }
                if (square.row === x && square.column === y) {
                    var color3 = square.color;
                }
                if (square.row === x-1 && square.column === y) {
                    var color4 = square.color;
                }
            }
            if (color1 === color2 && color2 === color3 && color3 === color4) {
                if (color1 ===null){
                    return "null";
                }
                return true;
            }              
            return false;
        }

        removeColorsInGroup(x, y){
            for (let square of this.squares) {
                if (square.row === x-1 && square.column === y-1) {
                    square.color = null;
                }
                if (square.row === x && square.column === y-1) {
                    square.color = null;
                }
                if (square.row === x && square.column === y) {
                    square.color = null;
                }
                if (square.row === x-1 && square.column === y) {
                    square.color = null;
                }
            }
            return;
        }

        isSolved(){
            for (let square of this.squares) {
                if (square.color !==null) {
                    return false;
                }
            }
            return true;
        }
}



export default class Model {
    constructor() {
        this.configs = [ config_4x4, config_5x5, config_6x6 ] 
        this.currentConfig = 0;
        this.board = new Board(this.configs[this.currentConfig])
        this.moveCount = 0;
        this.victory = false;
    }
    setcurrentConfig(index){
        this.currentConfig = index - 4;
        this.board = new Board(this.configs[this.currentConfig])
    }
    reset(){
        this.board = new Board(this.configs[this.currentConfig])
        this.moveCount = 0;
        this.victory = false;
    }
}