import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import { todoDelete, todoUpdate } from '../store/actions/todoActions';
import api from '../utils/api';
import { toast } from 'react-toastify';

function TodoCard({ todo }) {
  // console.log(todo);

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const promise = api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(todoDelete(todo.id)))
      .catch(err => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: 'Deleting todoList pending',
      success: 'todolist successfully deleted',
      error: 'A problem occurred while deleting',
    });
  };

  const toggleIsDone = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    //-  console.log(updatedTodo)

    const promise = api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => dispatch(todoUpdate(updatedTodo)))
      .catch(err => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: 'Completion todoList',
      success: 'todolist successfully completed',
      error: 'Sorry.! An error occured ..',
    });
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const handleEdit = () => {
    setIsOpen(!isOpen);
  };

  const updateTitle = text => {
    const updatedTitle = {
      ...todo,
      title: text,
      createdDate: new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    };

    const promise = api
      .put(`/todos/${todo.id}`, updatedTitle)
      .then(() => dispatch(todoUpdate(updatedTitle)))
      .catch(err => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: 'Loading todoList',
      success: 'todolist successfully updated',
      error: 'Sorry.! An error occured while updating',
    });

    handleClose();
  };

  return (
    <div className="d-flex flex-column  flex-md-row justify-content-between gap-4 mb-4  w-100 px-3 py-4  shadow-lg border rounded-3">
      <div className="flex-grow-1 d-flex align-items-center gap-2">
        <h5 className="fw-semibold text-capitalize flex-grow-1 mb-0">
          {todo.title}
        </h5>
        <p className="mb-0 me-3 ">{todo.isDone ? 'Completed' : 'Continue'}</p>
        <p className="mb-0">{todo.createdDate}</p>
      </div>
      <div className="d-flex justify-content-end gap-2">
        <button
          onClick={handleEdit}
          className="btn btn-success px-3"
          type="button"
        >
          Edit
        </button>
        <button
          onClick={toggleIsDone}
          className="btn btn-warning px-3"
          type="button"
        >
          {todo.isDone ? 'Back' : 'Completed'}
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-danger px-3"
          type="button"
        >
          Delete
        </button>
      </div>

      {isOpen && (
        <Modal
          todo={todo}
          onUpdateTitle={updateTitle}
          onHandClose={handleClose}
        />
      )}
    </div>
  );
}
export default TodoCard;
