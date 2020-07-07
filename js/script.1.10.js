(function () {
    'use strict'

    calc();

    function calc() {
        let amount = document.querySelector('#amount').value,
        period     = document.querySelector('#period').value,
        percent    = document.querySelector('#percent').value

        let result = (amount / 100) * ((percent / 12) * period);

        document.querySelector('#result span').innerText = result.toFixed(2);
    }

    let fields = document.querySelectorAll('.field')

    fields.forEach(field => {
        field.addEventListener('keydown', function(e) {
            console.log(e.which);
            
            if (e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 8) {
                e.preventDefault();
            } else {
                calc();
            }
        });
    })
    
})()