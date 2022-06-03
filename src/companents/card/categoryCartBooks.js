import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const CategoryCartBooks = ({el}) => {

    return (

        <div className="mx-5">

            <Link to={'/'}
                  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img src={el.image} alt=""/>
                <div className="flex align-middle">
                    <p className="font-bold text-gray-700 dark:text-gray-400">{el.title}</p>
                    <FontAwesomeIcon
                        className="pl-4 pt-1"
                        icon={faArrowRight}/>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCartBooks;