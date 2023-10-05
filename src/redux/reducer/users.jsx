import { actionTypes } from "../actionTypes/actionTypes";

const userReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return { products: action.payload };

        case actionTypes.REMOVE_PRODUCT:
            return { products: action.payload };

        default:
            return state;
    }
};

export default userReducer;
