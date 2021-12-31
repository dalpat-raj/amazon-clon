const btn_cart = document.querySelectorAll('.btn-cart')

window.addEventListener('storage',(e)=>{
    window.location.reload();
})



let items = [];
for(let i=0; i<btn_cart.length; i++){
    btn_cart[i].addEventListener('click',(e)=>{
        if(typeof(Storage) !== 'undefined'){
            let item = {
                id: i + 1,
                Image: e.target.parentElement.parentElement.children[0].src,
                title: e.target.parentElement.parentElement.children[1].innerHTML,
                price: e.target.parentElement.parentElement.children[2].childNodes[1].nextSibling.innerHTML,
                no:1
            };
            if(JSON.parse(localStorage.getItem('items')) === null){
                items.push(item)
                localStorage.setItem('items',JSON.stringify(items))
                window.location.reload();
            }else{
                const LocalItems = JSON.parse(localStorage.getItem('items'));
                LocalItems.map(data=>{
                    if(item.id === data.id){
                        item.no = data.no + 1;
                    }else{
                        items.push(data)
                    }
                });
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload();
            }
        }else{
            alert('item is not present')
        }
    })
}

// show data cart icon 











