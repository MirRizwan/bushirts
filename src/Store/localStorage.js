export const saveState = (state) => {
  try {
    let dated = new Date();
    dated.setHours(dated.getHours() + 24);

    const serializedState = JSON.stringify(state.cart);
    const serializedTotalAmount = JSON.stringify(state.totalAmount);
    const serializedDated = JSON.stringify(dated);

    localStorage.setItem("cart", serializedState);
    localStorage.setItem("haseebExpiry", serializedDated);
    localStorage.setItem("totalAmount", serializedTotalAmount);
  } catch (err) {
    console.log("Local storage Saving Error: ", err);
  }
};

export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");

    if (serializedState === null) {
      return [];
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Local storage Loading Error: ", err);
    return [];
  }
};

export const loadTotalAmount = () => {
  try {
    const serializedTotalAmount = localStorage.getItem("totalAmount");
    const finalValue = JSON.parse(serializedTotalAmount);
    if (serializedTotalAmount === null) {
      return [];
    }
    return finalValue;
  } catch (err) {
    console.log("Local storage Loading Error: ", err);
    return [];
  }
};
