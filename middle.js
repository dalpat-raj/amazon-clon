
const cart_item = document.querySelector('.cart-item')
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data=>{
        no = no+data.no
    })
    cart_item.innerHTML = no;
    
    
        
