let a;
let date;
let time;
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
setInterval(() => {

    a = new Date();
    let date = a.toLocaleDateString(undefined, options);

    let num1 = a.getHours()
    let num2 = a.getMinutes();
    let num3 = a.getSeconds();

    if (num1 < 10 || num2 < 10 || num3 < 10) {
        if (num1 < 10) {
            if (num2 < 10) {
                if (num3 < 10) {
                    let time = '0' + a.getHours() + ':0' + a.getMinutes() + ':0' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                } else {
                    let time = '0' + a.getHours() + ':0' + a.getMinutes() + ':' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                }
            } else {
                if (num3 < 10) {
                    let time = '0' + a.getHours() + ':' + a.getMinutes() + ':0' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                } else {
                    let time = '0' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                }
            }

        } else {
            if (num2 < 10) {
                if (num3 < 10) {
                    let time = a.getHours() + ':0' + a.getMinutes() + ':0' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                } else {
                    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                }
            } else {
                if (num3 < 10) {
                    let time = a.getHours() + ':' + a.getMinutes() + ':0' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                } else {
                    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
                    document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
                }
            }
        }
    } else {
        let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('time').innerHTML = time + "<br>on " + date + " (IST)";
    }
}, 1000);