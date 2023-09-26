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
}

export default class Model {
    constructor() {
        this.configs = [ config_4x4, config_5x5, config_6x6 ] 
        this.currentConfig = 0;
        this.board = new Board(this.configs[this.currentConfig])
    }
    setcurrentConfig(index){
        this.currentConfig = index - 4;
        this.board = new Board(this.configs[this.currentConfig])
    }
}