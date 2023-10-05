import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [productCount, setProdudctCount] = useState(0);
    const products = useSelector((reduxStore) => reduxStore.products);
    useEffect(() => {
        setProdudctCount(products.length);
    }, [products]);
    return (
        <div className="bg-slate-500 flex justify-around h-14 items-center font-semibold font-mono text-lg text-yellow-50">
            <h1>E-commerce</h1>
            <div className="flex gap-2">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <span>{productCount}</span>
        </div>
    );
};

export default Navbar;
