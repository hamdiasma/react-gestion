export const setUser = value => {
  return {
    type: "SET_USER",
    payload: value
  };
};
export const unsetUser = () => {
  return {
    type: "UNSET_USER"
  };
};
