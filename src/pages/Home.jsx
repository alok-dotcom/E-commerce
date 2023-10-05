import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "../redux/actions/reducerAction";

const Home = () => {
    const [products, setProducts] = useState();
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };

    const handleAdd = (product) => {
        dispatch(AddProduct(product));
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-3 bg-slate-300 p-10 ">
            {products?.map((product) => (
                <div
                    className="bg-white flex flex-col rounded-xl p-1"
                    key={product.id}
                >
                    <div className="h-30 flex justify-around p-1 font-serif">
                        <img className="h-20" src={product.image} alt="" />
                        <div className="mt-3">
                            <h3>Price: {product.price}</h3>
                            <h2>Rating: {product.rating.rate}</h2>
                        </div>
                    </div>
                    <button
                        onClick={() => handleAdd(product)}
                        className="bg-slate-600 p-1 w-1/2 m-auto rounded-lg text-white font-mono"
                    >
                        Add
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Home;
