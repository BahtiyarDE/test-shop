import {api} from "../../API/api";
import {
    ADD_TO_BASKET,
    DECREASE_QUANTITY,
    GET_SHOP_LIST_CATEGORY,
    GET_SHOP_PRODUCT_DETAIL,
    GET_SHOP_PRODUCT_LIST,
    REMOVE_PRODUCT_BASKET
} from "../type/type";


export const addToBasket = (item) =>{
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const productBasket = basket.find(el => el.id === item.id)
    if (productBasket){
        basket = basket.map(el => {
            return el.id === item.id ? {...el, quantity: el.quantity + 1} : el
        })
    } else {
        basket = [...basket , {...item , quantity: 1}]
    }
    localStorage.setItem("basket", JSON.stringify(basket))
    return {type:ADD_TO_BASKET , payload:item}
}




export const DecreaseToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.map(el => {
        return el.id !== item ? {...el, quantity: el.quantity - 1} : el
    })
    localStorage.setItem("basket", JSON.stringify(basket))
    return {type:DECREASE_QUANTITY , payload:item}
}

export const RemoveProductBasket = (item) =>{
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.filter( el => el. id !== item)

    localStorage.setItem("basket", JSON.stringify(basket))
    return {type:REMOVE_PRODUCT_BASKET , payload:item}
}

/////////////////////////////////////////////////////

export const getCategoryList = () =>{
    return(dispatch) =>{
        api.get(`categories/`)
            .then(({data})=>{
                dispatch({type:GET_SHOP_LIST_CATEGORY, payload:data})
            })
    }
}

export const getProdList = () =>{
    return(dispatch) =>{
        api.get(`books/`)
            .then(({data})=>{
                dispatch({type:GET_SHOP_PRODUCT_LIST , payload:data})
            })
    }
}

export const getProdDetail = (id) =>{
    return(dispatch) =>{
        api.get(`books/${id}/`)
            .then(({data})=>{
                dispatch({type:GET_SHOP_PRODUCT_DETAIL , payload:data})
            })
    }
}













//
// import {
//     ADD_TO_BASKET,
//     CHANGE_CURRENCY,
//     DECREASE_QUANTITY,
//     DELETE_FROM_BASKET,
//     GET_BOOKS, GET_SINGLE_PRODUCTS
// } from "../actionTypes/actionTypes";
// import axios from "axios";
//
// export const getBooks = () => {
//     return async (dispatch) => {
//         const url = await axios("https://bo-ok-shop.herokuapp.com/api/v1/books/")
//         const response = await url
//         dispatch({type: GET_BOOKS, payload: response.data})
//     }
// }
// export const getSingleProducts = (id) => {
//     return async (dispatch) => {
//         const url = await axios(`https://bo-ok-shop.herokuapp.com/api/v1/books/${id}`)
//         const response = await url
//         dispatch({type: GET_SINGLE_PRODUCTS, payload: response.data})
//     }
// }
// export const addBasket = (data) => {
//
//
//
//     let basket = JSON.parse(localStorage.getItem('basket')) || []
//
//     const foundId = basket.find(el => el.id === data.id)
//     console.log(foundId)
//
//     if (foundId) {
//
//         basket = basket.map(el => {
//             return el.id === data.id ? {...el, quantity: el.quantity + 1} : el
//         })
//
//     }else {
//         basket = [...basket, {...data, quantity: 1}]
//
//     }
//     localStorage.setItem('basket', JSON.stringify(basket))
//     return {type: ADD_TO_BASKET, payload: data}
//
// }
//
// export const decreaseQuantity = (data) => {
//
//     let basket = JSON.parse(localStorage.getItem('basket')) || []
//
//     basket = basket.map(el => {
//             return el.id === data ? {...el, quantity : el.quantity -1} : el
//         }
//     )
//
//     localStorage.setItem("basket", JSON.stringify(basket))
//     return {type: DECREASE_QUANTITY, payload: data}
// }
//
// export const deleteFromBasket = (data) => {
//
//     let basket = JSON.parse(localStorage.getItem('basket')) || []
//     basket = basket.filter(el => {
//         return  el.id !== data
//     })
//
//     localStorage.setItem('basket',JSON.stringify(basket))
//     return {type: DELETE_FROM_BASKET, payload: data}
// }
//
//
//
//
// export const changeCurrency = (data) => {
//     return {type: CHANGE_CURRENCY, payload: data}
// }
//
//
//
//
//
