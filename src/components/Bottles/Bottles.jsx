import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredcart } from "../../Utilitis/localStorage";
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const cartStored = getStoredcart();
            console.log(cartStored);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>
                Bottles : {bottles.length}
            </h2>
            <p>Cart : {cart.length}</p>
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