import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

function ListTodos() {
  const storeState = useSelector(store => store.todoReducer);
  //- console.log(storeState);

  return (
    <div>
      {storeState.todos.map(item => (
        <TodoCard todo={item} key={item.id} />
      ))}
    </div>
  );
}
export default ListTodos;
