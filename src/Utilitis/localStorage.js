const getStoredcart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = (id) => {
    const cart = getStoredcart();
    cart.push(id);

    saveCartToLS(cart);
}

export {addToLS, getStoredcart};