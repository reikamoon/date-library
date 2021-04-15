// reikamoon's date library
const {months, mons, days, dys } = require('./utils')

class D {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear()
    }

    get yr() {
        return this._date.getFullYear() % 100 
    }

    get month() {
        return months[this._date.getMonth()]
    }

    get mon() {
        return mons[this._date.getMonth()]
    }

    get day() {
        return days[this._date.getDay()]
    }

    get dy() {
        return dys[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }

    get hour() {
        return this._date.getHours()
    }

    get min() {
        return this._date.getMinutes()
    }

    get sec() {
        return this._date.getSeconds()
    }

     format(mask = 'M D Y') {
        const dict = {
            "Y": this.year,
            "y": this.yr,
            "M": this.month,
            "m": this.mon,
            "D": this._date.getDate(),
            "d": this.date,
            "H": this._date.getHours(),
            "h": this._date.getHours(),
            "I": this._date.getMinutes(),
            "i": this.mins,
            "S": this._date.getSeconds(),
            "s": this.secs,
        }

        let output = ''
        for (let i = 0; i < mask.length; i++) {
            if (dict[mask[i]] === undefined) {
                output += mask[i]
            } else {
                output += dict[mask[i]]
            }
        }
        return output
    }

    when() {
        const now = new D();
        const ydiff = this.year - now.year
        var absoluteyear = Math.abs(ydiff)
        const mdiff = this._date.getMonth() - now._date.getMonth() + ydiff * 12;
        var absolutemonth = Math.abs(mdiff)
        const ddiff = this._date - now._date
        var absoluteday = Math.abs(ddiff)

        if(ydiff <  0) {
            return `${absoluteyear} years ago`;
        } else if (ydiff === 1){
            return `${absoluteyear} year ago`;
        } else if (ydiff > 0) {
            return `${absoluteyear} years from now`;         
        }
    }
}


module.exports = D

day = new D(1590, 0, 12).when()
console.log(day)