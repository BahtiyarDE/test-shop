import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, } from "../../redux/action/action";
import { toast } from 'react-toastify';

import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const BooksCard = ({el}) => {

    const {basket} = useSelector(s => s)


    const dispatch = useDispatch()




    const basketId = basket.find(product => product.id === el.id)
    const notifyBasket = (el) => {
        dispatch(addToBasket(el));

    }



    return (
        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 my-5  text-center flex justify-center"
             key={el.id}>
            <div
                className="sm:px-2 py-2  md:px-2 py-3 lg:px-3 py-4 xl:px-4 py-5 text-gray-100 bg-gray-900 px-4 py-4
                 rounded-md body-font shadow-black bg-black-500 shadow-lg shadow-black-500/100 hover:scale-105 mx-3 ">

                <div className="w-full ">
                    <Link to={`/shop-details/${el.id}`}>
                        <img src={el.image} alt="image"
                             className="w-full h-96 object-cover rounded-md"/>
                    </Link>
                </div>

                <span className="flex flex-col mt-3">
                  <div className="flex justify-between">
                         <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <p>{el.price}</p>
                        </div>
                  </div>
                        <h4 className="font-head font-medium pb-5 w-60 text-left ">{el.title}</h4>

                </span>

                <div className="">
                    <button onClick={() =>  basketId ? null : notifyBasket(el)

                    }
                            className='product--info__icons--bg'>
                        {basketId ?
                            <Link to='/basket'><FontAwesomeIcon className='product--info__icons__icon' icon={faCircleArrowRight}/> </Link>: <FontAwesomeIcon className='product--info__icons__icon' icon={faBasketShopping}/>}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default BooksCard;