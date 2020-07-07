(function () {
    'use strict';

    let year;
    do {
        year = +prompt('Введите год');
    } while(isNaN(year));
    year = Math.abs(year)

    if (false) {

        // if ((year % 400) == 0) {}
        if (!(year % 400) || (!(year % 4) && (year % 100))) {
            alert('Этот год высокосный')
        } else {
            alert('Этот год невысокосный')
        }

        if ((year % 400) && ((year % 4) || !(year % 100))) {
            alert('Этот год невысокосный')
        } else {
            alert('Этот год высокосный')
        }

        let isLeapYear = false;

        if (!(year % 400)) {
            isLeapYear = true;
        }

        if (!(year % 4) && (year % 100)) {
            isLeapYear = true;
        }

        if (isLeapYear) {
            alert('Этот год высокосный')
        } else {
            alert('Этот год невысокосный')
        }
    }

    // 5 / 2 = 2
    // 5 % 2 = 1
    // !0 = true
    // !!0 = false

    let date = new Date(year, 1, 28)

    date.setDate(date.getDate() + 1)

    if (date.getDate() == 1) {
        alert('Этот год невысокосный')
    } else {
        alert('Этот год высокосный')
    }

})();