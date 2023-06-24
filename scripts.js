let list = document.querySelectorAll('.list .item');
list.forEach(item =>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            let itemNew = item.cloneNode(true);
            let checkIsset = false;

            let listCart = document.querySelectorAll('.cart .item ');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') ==itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger')
                    },1000);
                }
            });
            if(checkIsset == false){
              
              document.querySelector('.listCart').appendChild(itemNew);
            }

            
        }
    })
});


function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') ==$key){
            item.remove();
            return;
        }
    })
};

function Change() {
    document.querySelectorAll('.favour').forEach(function(element) {
      element.addEventListener('click', function(event) {
        let currentColor = event.target.style.color 
        let newColor =  currentColor === 'red' ? 'black' : 'red';
        event.target.style.color = newColor;
      });
    });
  }

  


  function Addition(event) {
    const item = event.target.closest('.item');
    let priceElement = item.querySelector('.price');
    let countElement = item.querySelector('.count');
    let originalPrice = parseFloat(priceElement.getAttribute('data-original-price'))
    let price = parseFloat(priceElement.innerText.replace('$', ''));
    let count = parseInt(countElement.value);
    countElement.value = count + 1;
    
    
    let updatedPrice = originalPrice + price;
    priceElement.innerText = '$' + updatedPrice.toFixed(2);
  }
  
  function Subtract(event) {
    const item = event.target.closest('.item');let priceElement = item.querySelector('.price');
    let countElement = item.querySelector('.count');
    let count = parseInt(countElement.value);
    if (count > 1) {
      countElement.value = count - 1;
      let originalPrice = parseFloat(priceElement.getAttribute('data-original-price'))
      let price = parseFloat(priceElement.innerText.replace('$', ''));
      let updatedPrice = price - originalPrice;
      priceElement.innerText = '$' + updatedPrice.toFixed(2);
    }
  }



  