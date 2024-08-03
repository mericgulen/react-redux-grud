import { useRef } from 'react';

function Modal({ todo, onHandClose, onUpdateTitle }) {
  const inputValue = useRef();

  const handleClose = () => {
    onHandClose();
  };

  const handleUpdate = () => {
    const text = inputValue.current.value;
    onUpdateTitle(text);
  };

  return (
    <div className="modal bg-black bg-opacity-50  d-block text-dark">
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Update List</h1>
          </div>
          <div className="modal-body my-2">
            <label className="">New Title</label>
            <input
              ref={inputValue}
              defaultValue={todo.title}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleClose}
              type="button"
              className="btn btn-secondary"
            >
              Cancel
            </button>

            <button
              onClick={handleUpdate}
              type="button"
              className="btn btn-success"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
