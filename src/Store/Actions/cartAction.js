export const addCart = (data, qty, size, texture, color) => {
  const option = {
    data: data,
    qty: qty,
    size: size,
    texture: texture,
    color: color,
  };
  return {
    type: "ADD_CART",
    payload: option,
  };
};

export const removeCart = (data) => {
  return {
    type: "REMOVE_CART",
    payload: data,
  };
};
