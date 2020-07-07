(function() {
    'use strict'
    
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        texts: {},
        templates: {
            nominative: {
                hours: 'час',
                minutes: 'минута',
                seconds: 'секунда',
            },
            genetive:  {
                hours: 'часа',
                minutes: 'минуты',
                seconds: 'секунды',
            },
            pluralGenitive: {
                hours: 'часов',
                minutes: 'минут',
                seconds: 'секунд',
            }
        },
        getType(param) {
            let lastChar = ('' + this[param]).slice(-1);

            if ((lastChar == 1 && this[param] !== 11)) {
                return 'nominative'
            }

            if (['2','3','4'].includes(lastChar) && 
                ![12,13,14].includes(this[param])) {
                return 'genetive'
            }

            return 'pluralGenitive';
        },
        init() {
            this.refresh(new Date())
        },
        show() {
            document.write(`<p>Сейчас 
                ${('0' + this.hours).slice(-2)} ${this.texts.hours}
                ${this.minutes < 10 ? '0' + this.minutes : this.minutes} ${this.texts.minutes} 
                ${('0' + this.seconds).slice(-2)} ${this.texts.seconds}</p>`);
        },
        addAll(hours, minutes, seconds) {
            let now = new Date();
            now.setHours(this.hours + hours)
            now.setMinutes(this.minutes + minutes)
            now.setSeconds(this.seconds + seconds)

            this.refresh(now)
        },
        addSeconds(amount) {
           this.addAll(0, 0, amount)
        },
        addMinutes(amount) {
            this.addAll(0, amount, 0)
        },
        addHours(amount) {
            this.addAll(amount, 0, 0)
        },
        refresh(now) {
            this.hours = now.getHours()
            this.minutes = now.getMinutes()
            this.seconds = now.getSeconds()

            this.texts = this.templates.pluralGenitive;

            new Array('hours', 'minutes', 'seconds').map(param => {
                console.log(param); 

                let type = this.getType(param);

                if (type != 'pluralGenitive') {
                    this.texts[param] = this.templates[type][param]
                }

                // let lastChar = ('' + this[param]).slice(-1);

                // this.texts[param] = (lastChar == 1 && this.hours != 11) ?
                //     this.templates.nominative[param] : 
                //     this.texts[param]; 
                // this.texts[param] = (['2','3','4'].includes(lastChar) && ![12, 13, 14].includes(this[param])) ?
                //     this.templates.genetive[param] : 
                //     this.texts[param];
            })
        }
    };

    time.init();
    time.show();

    time.addSeconds(10);
    time.show();

    
    time.addMinutes(30);
    time.show();

    time.addHours(8);
    time.show();
    

})();
