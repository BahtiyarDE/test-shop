import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const BasketCardProduct = ({el}) => {
    const {basket} =useSelector(s => s)




    return (
        <div>

            <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 my-5 text-center flex justify-center" key={el.id}>
                <div
                    className="sm:px-2 py-2  md:px-2 py-3 lg:px-3 py-4 xl:px-4 py-5 text-gray-500 bg-gray-900 px-4 py-4 rounded-md body-font shadow-black bg-black-500 shadow-lg shadow-black-500/100 hover:scale-105 mx-3">

                    <div className="w-full">
                        <Link to={`/shop-details/${el.id}`}>
                            <img src={el.image} alt="image"
                                 className="w-full h-96 object-cover rounded-md"/>
                        </Link>
                    </div>

                    <span className="flex flex-col mt-3">
                        <h4 className="font-head font-medium pb-5 w-60 text-left">{el.title}</h4>
                    <div className="flex justify-between">
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <p>{el.price}</p>
                        </div>
                    </div>

                    </span>
                </div>

            </div>

        </div>
    );
};

export default BasketCardProduct;