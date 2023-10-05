import { useDispatch, useSelector } from "react-redux";
import { RemoveProduct } from "../redux/actions/reducerAction";
import "./cart.css";

const Cart = () => {
    const products = useSelector((reduxStore) => reduxStore.products);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(RemoveProduct(id));
    };

    return (
        <div className="cart__container">
            {products.map((product) => (
                <div className="cart" key={product.id}>
                    <img
                        className="img_conatainer"
                        src={product.image}
                        alt=""
                    />
                    <p>Price : {product.price}</p>
                    <button
                        onClick={() => handleRemove(product.id)}
                        className="btn"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
