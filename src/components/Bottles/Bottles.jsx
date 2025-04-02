import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
// import { addToLS, getStoredcart, removeFromLS } from "../../Utilitis/localStorage";
import Cart from "../Cart/Cart";
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);

    // useEffect(() => {
    //     //console.log(bottles.length);
    //     if (bottles.length) {
    //         const cartStored = getStoredcart();
    //         //console.log(cartStored, bottles);
    //         const savedCart = [];
    //         for (let id of cartStored) {
    //             const bottle = bottles.find(bottle => bottle.id === id);
    //             if (bottle) {
    //                 savedCart.push(bottle);
    //             }
    //         }
    //         console.log('saved cart', savedCart);
    //         setCart(savedCart);
    //     }
    // }, [bottles])


    const handleAddToCart = bottle => {
        const isCart = cart.find(pd => pd.id === bottle.id)
        if(!isCart){
            const newCart = [...cart, bottle];
            setCart(newCart);
        }else{
            alert("already in cart");
        }
        // addToLS(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);    
        // removeFromLS(id);
    }

    return (
        <div>
            <h2>
                Bottles : {bottles.length}
            </h2>
            <div>
                <Cart cart={cart} 
                handleRemoveFromCart={handleRemoveFromCart} />
            </div>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}
                    />)
                }
            </div>
        </div>
    );
};

export default Bottles;