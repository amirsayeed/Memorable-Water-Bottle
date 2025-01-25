import './Cart.css';
const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <h2>Cart: {cart.length}</h2>
            <div className="cart-container">
                {
                    cart.map(bottle => <img src={bottle.img} alt="" />)
                }
            </div>
        </div>
    );
};

export default Cart;