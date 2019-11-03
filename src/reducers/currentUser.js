const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action.payload)
      return action.payload;
    case "UNSET_USER":
      return {};
    default:
      return state;
  }
};

export default currentUser;