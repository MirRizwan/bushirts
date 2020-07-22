export const addCart = data =>{
    return{
        type: "ADD_CART",
        payload: data
    }
}

export const removeCart = data =>{
    return{
        type: "REMOVE_CART",
        payload: data
    }
}