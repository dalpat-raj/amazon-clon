    const table = document.querySelector('table');

    window.addEventListener('storage',(e)=>{
        window.location.reload();
        // loaddata();
    })

                            // decreade buuton 
    let items =[];
    function decreasecount(ItemId){
       let data = localStorage.getItem('items')
       let ParseData = JSON.parse(data)
       ParseData.map(data=>{
           if(ItemId == data.id){
               if(data.no > 1){
                   data.no = data.no-1;
                   items.push(data)
               }else{
                items.push(data)
               }
           }else{
               items.push(data)
           }
       });
       localStorage.setItem('items', JSON.stringify(items))
       window.location.reload();
    }

                //    increase button  
    let itemss = [];
    function increasecount(ItemId){
        console.log(ItemId);
       let data = localStorage.getItem('items')
       let ParseData = JSON.parse(data)
       ParseData.forEach(data=>{
           if(ItemId == data.id){
               if(data.no < 30){
                   data.no = data.no+1;
                   itemss.push(data)
               }else{
                itemss.push(data)
               }
           }else{
               itemss.push(data)
           }
       });
       localStorage.setItem('items', JSON.stringify(itemss))
       window.location.reload();
    }


if(JSON.parse(localStorage.getItem('items')) === null){
    const newtrr = document.createElement('tr')
    newtrr.innerHTML = `No item in your cart`
    table.append(newtrr)
}
else{
    let total = 0;
    JSON.parse(localStorage.getItem('items')).map(data=>{
        total = total+data.no*data.price;
        const newtr = document.createElement('tr')
        newtr.innerHTML = `<th class="idid">${data.id}</th><th class="imagg"><img src="${data.Image}"><span class="titlee">${data.title}</span></th><th><span data-id="${data.id}" class="decreasebutton"><i class="fas fa-chevron-left"></i></span>${data.no}<span data-id="${data.id}" class="increasebutton"><i class="fas fa-chevron-right"></i></span></th><th>${numeral(data.no*data.price).format('$ 0,0.00')}</th><th><a href="#"onclick=Deletee(this);>Delete</a></th>` ;
        table.append(newtr)
    });
    document.querySelector('.subtotal').innerHTML = numeral(total).format('$ 0,0.00')
    createventlistner(); 
}


function createventlistner(){
    const decreasebutton = document.querySelectorAll('.decreasebutton')
    const increasebutton = document.querySelectorAll('.increasebutton')
    
    decreasebutton.forEach((button)=>{
        button.addEventListener('click',function(){
            decreasecount(button.dataset.id)
        })
    })
    increasebutton.forEach((button)=>{
        button.addEventListener('click',function(){
            increasecount(button.dataset.id)
        })
    })
}





// const cartitem = document.querySelector('#carttextt') 

// let no = 0;
// JSON.parse(localStorage.getItem('items')).map(data=>{
//     no = no+data.no
// })
// cartitem.innerHTML = no;

