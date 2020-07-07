(function () {
    'use strict'

    const checkPerfectNumber = num => {
        if (num % 2) return false;

        let dividersSum = 0;

        for (let i=1; i < num; i++) {

            // if (!(num % i)) {
            //     dividersSum += 1;
            // }

            dividersSum += (!(num % i)) ? i : 0
        }

        if (dividersSum == num) return true;

        return false;

        
    }
    // const checkPerfectNumber = function() {}
    // function checkPerfectNumber() {}

    let num;
    do {
        num = +prompt('Введите число')
    } while(isNaN(num))
    num = Math.abs(num)

    alert(checkPerfectNumber(num));
    

})()