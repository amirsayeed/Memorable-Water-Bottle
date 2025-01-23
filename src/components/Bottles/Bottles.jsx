import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
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