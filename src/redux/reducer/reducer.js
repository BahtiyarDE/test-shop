import {
    ADD_TO_BASKET, ADD_TO_FAVORITE,
    DECREASE_QUANTITY,
    GET_SHOP_LIST_CATEGORY,
    GET_SHOP_PRODUCT_DETAIL,
    GET_SHOP_PRODUCT_LIST, REMOVE_PRODUCT_BASKET
} from "../type/type";

const initialState = {
    shopListCategory: [],
    shopProductList: [],
    shopProductDetail: {},
    basket: JSON.parse(localStorage.getItem("basket")) || [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOP_LIST_CATEGORY:
            return {...state, shopListCategory: action.payload}
        case GET_SHOP_PRODUCT_LIST:
            return {...state, shopProductList: action.payload}
        case GET_SHOP_PRODUCT_DETAIL:
            return {...state, shopProductDetail: action.payload}
        case ADD_TO_BASKET:
            const productBasket = state.basket.find(el => el.id === action.payload.id)

            if (productBasket) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}

        case DECREASE_QUANTITY:
            if (state.basket[action.payload].quantity > 1){
                return {
                    ...state, basket: state.basket.map((el , idx) => idx === action.payload ?
                        {...el, quantity: el.quantity - 1} : el
                    )
                }
            } return
        case REMOVE_PRODUCT_BASKET:
            return {...state, basket: state.basket.filter(el => el.id !== action.payload )}

        default :
            return state
    }
}