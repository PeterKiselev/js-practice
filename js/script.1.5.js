(function(){
    'use strict';

    // let distance = +prompt('Введите расстояние между городами в км');
    // while(isNaN(distance)) {
    //     distance = +prompt('Введите расстояние между городами в км');
    // }

    // if(isNaN(distance)) {
    //     distance = +prompt('Введите расстояние между городами в км');
    // } else {}

    let distance;
    do {
        distance = +prompt('Введите расстояние между городами в км');
    } while(isNaN(distance));
    distance = Math.abs(distance)

    let time
    do {
        time = +prompt('Введите время')
    } while(isNaN(time) || time === 0)
    time = Math.abs(time)

    // document.write('Скорость, скоторой необходимо двигаться ' + (distance / time).toFixed(1) + ' км/час');
    document.write(`
        Скорость, скоторой необходимо 
        двигаться <b>${(distance / time).toFixed(1)} </b>
        км/час
        `)
    
})()
