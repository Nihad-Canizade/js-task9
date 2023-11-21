let btn = document.getElementById('calculate');


btn.addEventListener('click', () => {
    let radio1 = document.getElementById('five-percent').checked;
    let radio2 = document.getElementById('ten-percent').checked;
    let radio3 = document.getElementById('fifteen-percent').checked;
    let radio4 = document.getElementById('twenty-percent').checked;
    let x;
    let entertotal = document.getElementById('bill-amount').value;
    let enterperson = document.getElementById('number-of-people').value;

    if (radio1 == true) {
        x = 5;
    } else if (radio2 == true) {
        x = 10;
    } else if (radio3 == true) {
        x = 15;
    } else if (radio4 == true) {
        x = 20;
    }

    // Tip Amount return
    let sum1 = (entertotal * x) / 100;
    document.getElementById('tip-amount').innerHTML = sum1.toFixed(2);

    // Total Per Person return
    let sum2 = (parseFloat(entertotal) + sum1) / parseFloat(enterperson);
    document.getElementById('total-per-person').innerHTML = sum2.toFixed(2);
});

