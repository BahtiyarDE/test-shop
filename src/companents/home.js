import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategoryList, getProdList} from "../redux/action/action";
import BooksCard from "./card/booksCard";
import Slider from "react-slick";
import Bg from  "./../img/image 112.png"
import CategoryCartBooks from "./card/categoryCartBooks";


const Home = () => {
    const dispatch = useDispatch()
    const {shopProductList : product} = useSelector(s => s)
    const {shopListCategory: category} = useSelector(s => s)

    useEffect(() =>{
        dispatch(getProdList())
        dispatch(getCategoryList())
    },[])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
    };

    const categorySettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (



        <div className="min-h-screen">
            <div className="w-full">
                <div className="w-full md: mx-auto container">
                    <div className="p-10 ">

                            <Slider {...settings}>
                                <div>
                                    <img src={Bg} alt=""/>
                                </div>
                                <div>
                                    <img src={Bg} alt=""/>
                                </div>
                                <div>
                                    <img src={Bg} alt=""/>
                                </div>
                                <div>
                                    <img src={Bg} alt=""/>
                                </div>

                            </Slider>

                    </div>

                </div>
            </div>

            <div className=" container mx-auto p-10 flex-col md:flex-row items-center mx-auto ">
                <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold">Категории</h1>

                <div className="w-full ">
                    <Slider
                        {...categorySettings}>
                        {
                            category.map(el => (
                                <div key={el.id} className="py-2">
                                    <CategoryCartBooks el={el}/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="flex flex-row flex-wrap ">
                    <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold">Возможно, Вам понравится</h1>
                    {
                        product.map(el => (
                            <div key={el.id}>
                                <BooksCard el={el} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default Home;