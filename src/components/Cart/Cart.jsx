import PropTypes from 'prop-types';
import './Cart.css';
const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="cart">
            <h2>Cart: {cart.length}</h2>
            <div className="cart-container">
                {
                    cart.map(bottle => <div className='card-cart' key={bottle.id}> 
                    <img src={bottle.img} alt="" />
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;