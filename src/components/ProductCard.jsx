import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="  rounded-2xl flex flex-col h-[400px]  overflow-hidden shadow-2xl ">
                <div className=" h-[200px]  ">
                    <img className=" h-full w-full object-cover" src={product.imageUrl} alt="" />
                </div>
                <div className=" p-5 flex-1 h-[200px]  flex flex-col justify-between">
                    <div>
                        <h1 className=" font-bold text-xl line-clamp-1">{product.name}</h1>
                        <p className=" line-clamp-2">{product.description}</p>
                    </div>
                    <div
                        onClick={() => dispatch(addToCart(product))}
                        className=" bg-amber-500 rounded px-3 py-1 text-center text-sm font-bold"
                    >
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
