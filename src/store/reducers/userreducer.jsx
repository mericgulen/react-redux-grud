

const initialState = {
  todos: [],
  isDarkMode: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};

export default userReducer;