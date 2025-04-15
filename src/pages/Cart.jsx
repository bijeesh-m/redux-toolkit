import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    console.log(cart);

    const dispatch = useDispatch();

    return (
        <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 mx-5">
            {cart.map((product) => {
                return (
                    <div
                        key={product.id}
                        className="  rounded-2xl flex flex-col h-[400px]  overflow-hidden shadow-2xl "
                    >
                        <div className=" h-[200px]  ">
                            <img className=" h-full w-full object-cover" src={product.imageUrl} alt="" />
                        </div>
                        <div className=" p-5 flex-1 h-[200px]  flex flex-col justify-between">
                            <div>
                                <h1 className=" font-bold text-xl line-clamp-1">{product.name}</h1>
                                <p className=" line-clamp-2">{product.description}</p>
                            </div>
                            <div
                                onClick={() => dispatch(removeFromCart(product.id))}
                                className=" bg-amber-500 rounded px-3 py-1 text-center text-sm font-bold"
                            >
                                <button>Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
