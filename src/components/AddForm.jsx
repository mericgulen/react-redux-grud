import { useDispatch } from 'react-redux';
import { v4 as uniqueId } from 'uuid';
import { todoAdd } from '../store/actions/todoActions';
import api from '../utils/api';
import { toast } from 'react-toastify';

function AddForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const text = e.target[0].value;
    //-  console.log(text);

    //- create data to save to store

    const newTodo = {
      id: uniqueId(),
      title: text,
      isDone: false,
      createdDate: new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    };

    // console.log(newTodo)

    const promise = api
      .post('/todos', newTodo)
      .then(() => dispatch(todoAdd(newTodo)))
      .catch(err => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: 'Loading todoList',
      success: 'todolist successfully added',
      error: 'A problem occurred while loading',
    });

    //- send data todoReducer
    //-clear input
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className=" d-flex gap-3 my-5 shadow ">
      <input
        className="form-control shadow  rounded-3 text-black"
        type="text"
        placeholder="Redux Project..."
      />
      <button className="btn btn-warning px-4">Add</button>
    </form>
  );
}
export default AddForm;
