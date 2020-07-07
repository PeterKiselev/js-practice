(function() {
    'use strict'
    
    let products = [
        {
            name: 'Апельсин',
            price: 14.50,
            unit: 'кг',
            amount: 1.435
        },
        {
            name: 'Pepsi 2л.',
            price: 19.00,
            unit: 'шт',
            amount: 5
        },
        {
            name: 'Хлеб',
            price: 14.00,
            unit: 'шт',
            amount: 1
        },
        {
            name: 'Pepsi 2л.',
            price: 19.00,
            unit: 'шт',
            amount: 5
        }
    ]

    let ul = document.getElementById('bill'),
        totalPrice = 0,
        maxPrice = 0

    products.map((product, index) => {
        let li = document.createElement('li'),
            price = (product.amount * product.price).toFixed(2)

        totalPrice += +price
        // maxPrice = maxPrice < price ? price : maxPrice

        if (maxPrice < price) {
            maxPrice = price
        }

        li.innerHTML = `<div data-price="${price}">
            <span>${product.name}</span> 
            ${product.amount}${product.unit} x ${product.price.toFixed(2)}грн =
            ${price}грн
        </div>`

        ul.append(li)
    })

    let li = document.createElement('li')
    li.innerHTML = `Всего ${totalPrice}грн`
    ul.append(li);

    if (products.length) {
        let span = document.createElement('span')
        span.innerHTML = ` <code>Средняя стоимость 
            ${(totalPrice / products.length).toFixed(2)}грн</code>`
        ul.insertAdjacentHTML('afterend', span.outerHTML)
    }

    let codes = document.querySelectorAll(`[data-price="${maxPrice}"]`)

    codes.forEach(code => {
        code.style.fontWeight = 'bold'
        code.style.backgroundColor = 'orange'
    })

    console.log(maxPrice);
    

})();