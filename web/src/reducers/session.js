const initialState = {
  isAuthenticated: false,
  currentUser: {},
};

// This is like a listener that will set the state (session) 
// with the user data
export default function (state = initialState, action) {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.response.data,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
      };
    default:
      return state;
  }
}
