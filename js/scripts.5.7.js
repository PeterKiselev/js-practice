(function() {
    'use strict'
    
    let str
    do {
        str = prompt('Введите строку')
    } while(!str && str.trim().length < 2)

    let delta
    do {
        delta = +prompt('Введите сдвиг')
    } while(isNaN(delta))

    let isNegative = delta < 0

    delta = Math.abs(delta)

    console.log(str, delta)

    let length = str.length

    delta = delta % length

    if (false) {
    
        str += str.slice(0, delta) 
        console.log(str);
        
        str = str.substr(-1 * length, length)
        console.log(str);

        document.write(str)
    }

    str = str.split('');
    console.log(str);
    
    for (let i = 0; i < delta; i++) {
        if (isNegative) {
            str.unshift(str.pop())
        } else {
            str.push(str.shift())
        }
        
    }

    console.log(str);
    document.write(str.join(''))
    
})();