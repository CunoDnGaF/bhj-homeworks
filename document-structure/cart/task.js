let quantityControls = document.querySelectorAll('.product__quantity-control');
let productAdd = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');


for (let i of quantityControls) {
    i.addEventListener('click', function(event) {

        let value = event.target.parentNode.querySelector('.product__quantity-value');
    
        if (event.target.classList.contains('product__quantity-control_inc')) {
            ++value.innerText;
        } else {
            if (value.innerText > 1) {
                --value.innerText;
            } else {
                value.innerText = 1;
            }
        }
    });
}

for (let i of productAdd) {
    i.addEventListener('click', function(event) {

    let product = event.target.closest('.product');
    let productId = product.dataset.id;
    let value = +event.target.parentNode.querySelector('.product__quantity-value').innerText;
    let productImg = product.querySelector('.product__image').src;
    let count = product.querySelector('.product__quantity-value').innerText;
    
    let productInCart = Array.from(cart.children).find(productInCart => productInCart.dataset.id === productId);
    
        if (productInCart) {   
            let productCount = productInCart.querySelector('.cart__product-count');
            productCount.innerText = +productCount.innerText + value;
        } else {
            let newProductInCart = `<div class="cart__product" data-id="${productId}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${count}</div>
                                </div>`;

            cart.insertAdjacentHTML('beforeend', newProductInCart);
        }
    });
    
}



