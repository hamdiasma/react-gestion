export const setUser = value => {
  localStorage.setItem("currentUser", JSON.stringify(value));
  return {
    type: "SET_USER",
    payload: value
  };
};
export const unsetUser = () => {
  localStorage.removeItem("currentUser");
  return {
    type: "UNSET_USER"
  };
};
