import React from "react";
import products from "../../products.json";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <div>
            <div className=" flex justify-center  p-10">
                <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((prod) => {
                        return (
                            <div key={prod.id}>
                                <ProductCard product={prod} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
