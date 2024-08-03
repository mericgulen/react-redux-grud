import ActionType from '../ActionType';

const initialState = {
  todos: [],
  isDarkMode: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD:
      // console.log(action);
      //-  return { ...state, todos: state.todos.concat(action.payload) };
      return { ...state, todos: [...state.todos, action.payload] };

    case ActionType.DELETE:
      const filteredTodo = state.todos.filter(
        item => item.id !== action.payload
      );
      return { ...state, todos: filteredTodo };
    case ActionType.UPDATE:
      const updatedTodo = state.todos.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todos: updatedTodo };

    case ActionType.SET:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
