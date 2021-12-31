

function ClickCounter(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    var i = '';
    i += localStorage.clickcount;
    document.querySelector('.cart-item').innerHTML = i;
    
}

