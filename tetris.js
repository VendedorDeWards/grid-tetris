class cuadradito {
    constructor() {
        this.x = Math.round(Math.random() * 9 + 1);
        this.y = 1;
        this.last_x = this.x;
        this.last_y = 1;
        document.querySelector(`.cell:nth-child(${(this.y - 1) * 10 + this.x})`).style.backgroundColor = 'red';
    }
}

function move(object) {
    console.log('Current x, y:', object.x, object.y);
    document.querySelector(`.cell:nth-child(${(object.last_y - 1) * 10 + object.last_x})`).style.backgroundColor = 'black';
    document.querySelector(`.cell:nth-child(${(object.y - 1) * 10 + object.x})`).style.backgroundColor = 'red';
}

$(document).keypress(function (event) {
    switch (event.which) {
        case 119: //w key
            break;
        case 97: //a key
            if (prueba.x !== 1) {
                prueba.last_x = prueba.x;
                prueba.x -= 1;
                prueba.last_y = prueba.y;
                move(prueba);
            }
            break;
        case 115: //s key
            break;
        case 100: //d key
            if (prueba.x !== 10) {
                prueba.last_x = prueba.x;
                prueba.x += 1;
                prueba.last_y = prueba.y;
                move(prueba);
            }
            break;
    }

})

/* let tetrominos;

for (let i = 0; i < 10; i++) {
    tetrominos[i] = new cuadradito(); initialize objects dinamically!!! :)
}
 */
const prueba = new cuadradito();

let auto_down = setInterval(function() {
    if (prueba.y !== 20 && document.querySelector(`.cell:nth-child(${(prueba.y) * 10 + prueba.x})`).style.backgroundColor == 'black') { //Si y != 20 y la celda (x, y+1) esta vacía
        prueba.last_y = prueba.y;
        prueba.y += 1;
        prueba.last_x = prueba.x
        console.log("moving down...")
        move(prueba);
    } else {
        console.log('finished!')
        clearInterval(auto_down)
    }
}, 1000)