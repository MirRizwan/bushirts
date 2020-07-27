import { data } from "jquery";

export const saveState = (state) => {
  try {
    // console.log("Mir ka cart", state.cart);
    // console.log("Mir ka Total Amount", state.totalAmount);

    const serializedState = JSON.stringify(state.cart);
    const serializedTotalAmount = JSON.stringify(state.totalAmount);

    localStorage.setItem("cart", serializedState);
    localStorage.setItem("totalAmount", serializedTotalAmount);
  } catch (err) {
    console.log("Local storage Saving Error: ", err);
  }
};

export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    console.log("Cart ki Value", serializedState);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Local storage Loading Error: ", err);
    return undefined;
  }
};

export const loadTotalAmount = () => {
  try {
    const serializedTotalAmount = localStorage.getItem("totalAmount");
    console.log("Total Amount ki Value", serializedTotalAmount);

    if (serializedTotalAmount === null) {
      return undefined;
    }
    return JSON.parse(serializedTotalAmount);
  } catch (err) {
    console.log("Local storage Loading Error: ", err);
    return undefined;
  }
};
