import { actionTypes } from "../actionTypes/actionTypes";

export const AddProduct = (pro) => (dispatch, getState) => {
    const { products } = getState();
    console.log("AddProduct");

    const hasProduct = products.find((i) => i.id === pro.id);

    if (!hasProduct && pro !== "") {
        dispatch({
            type: actionTypes.ADD_PRODUCT,
            payload: [...products, pro],
        });
    }
};

export const RemoveProduct = (productID) => (dispatch, getState) => {
    const { products } = getState();

    dispatch({
        type: actionTypes.REMOVE_PRODUCT,
        payload: products.filter((i) => i.id !== productID),
    });
};
