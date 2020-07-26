export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.log("Local storage Saving Error: ", err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    console.log("Mir Agaya");
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Local storage Loading Error: ", err);
    return undefined;
  }
};
