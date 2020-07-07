(function () {
    'use strict'

    let questions = [{
        text     : 'Вопрос №1',
        points   : 2,
        answer   : 'a',
        variants : [{
                letter: 'a',
                text  : 'Правильный вариант'
            },{
                letter: 'b',
                text  : 'Неправильный вариант №1'
            },{
                letter: 'c',
                text  : 'Неправильный вариант №2'
            }]
    },{
        text     : 'Вопрос №2',
        points   : 3,
        answer   : 'b',
        variants : [{
                letter: 'a',
                text  : 'Неправильный вариант №1'
            },{
                letter: 'b',
                text  : 'Правильный вариант'
            },{
                letter: 'c',
                text  : 'Неправильный вариант №2'
            }]
    },{
        text     : 'Вопрос №3',
        points   : 1,
        answer   : 'c',
        variants : [{
                letter: 'a',
                text  : 'Неправильный вариант №2'
            },{
                letter: 'b',
                text  : 'Неправильный вариант №1'
            },{
                letter: 'c',
                text  : 'Правильный вариант'
            }]
    }];

    // console.log(questions);

    let i = 0,
        score = 0;

    // for (let i = 0; i < questions.length; i++) {

    // }

    // questions.map(q => {
    //     let str = q.text
        
    //     q.variants.map(variant => {
    //         str += `\n${variant.letter}. ${variant.text}`
    //     })

    //     score += (String(prompt(str)).toLowerCase() == q.answer) ? 
    //         q.points : 
    //         0;
    // })

    while (i < questions.length) {
        let q = questions[i];
        // prompt(string);
        // текст вопроса + а. текст перв варианта ответа + б. текст вт варианта ответа
        

        let str = q.text
        // console.log(str);

        q.variants.map(variant => {
            // str += "\n" + variant.letter +  '. ' + variant.text
            str += `\n${variant.letter}. ${variant.text}`
        })
        // console.log(str);

        let answer = String(prompt(str)).toLowerCase();

        // console.log(answer);

        // if (answer == q.answer) {
        //     score += q.points
        // }

        score += (answer == q.answer) ? q.points : 0;

        // (answer == q.answer) ? score += q.points : null;
        
    
        i++;
    }

    alert(`Вы набрали ${score} очков`);
    





    // let a = 4, b = 6

    // if (true) {
        
    // }

    // switch($route) {
    //     case 'home':
            
    //         break;

    //     case 'news':
            
    //         break;

    //     case 'about':
            
    //         break;

    //     default:
    //         break;
    // }

    // let routes = {
    //     home: function(){ return },
    //     news: function(){ return },
    //     about: function(){ return },
    // }

    // roures[$route]

})();