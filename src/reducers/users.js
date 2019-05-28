const initialState = {
  isFetching: false,
  error: null,
  user: null
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        isFetching: true,
        error: null,
        user: null
      };
    case "FETCH_USER_SUCCESS":
      return {
        isFetching: false,
        error: null,
        user: action.user
      };
    default:
      return state;
  }
};

export default user;
