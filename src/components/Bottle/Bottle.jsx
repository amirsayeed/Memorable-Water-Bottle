import PropTypes from 'prop-types';
import './Bottle.css'
import { useState } from 'react';
const Bottle = ({ bottle, handleAddToCart }) => {
    //console.log(bottle);
    const { name, img, price } = bottle;
    const [added, setAdded] = useState(false);

    const handleClick = () =>{
        setAdded(!added);
        handleAddToCart(bottle);
    }

    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={handleClick}>{added ? "Added" : "Add to Cart"}</button>
        </div>
    );
};

Bottle.propTypes = {
bottle: PropTypes.object.isRequired,
handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;