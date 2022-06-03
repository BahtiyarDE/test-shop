import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const Header = () => {
    const {basket: el} = useSelector(s => s)
    console.log(el.length, "ELEMENT")

    return (
        <div className="bg-[#010049] py-6">
            <div className="container mx-auto">
                <div className="flex justify-between px-5">
                    <Link to={"/"}
                          className="py-2 text-white font-bold text-2xl">BOOKShop</Link>
                    <Link to={'/shop-basket'}>
                        <button className="flex flex-col text-white font-bold py-3 px-5">
                            <FontAwesomeIcon
                                className="pl-5"
                                icon={faCartShopping}/>
                            Корзина
                            {
                                el.length === 0 ? '' : el.length
                            }
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;