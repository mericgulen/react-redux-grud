import ListTodos from './components/ListTodos';
import AddForm from './components/AddForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todoSet } from './store/actions/todoActions';
import api from './utils/api';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //- get data from API and send it  store

    api.get('/todos').then(res => dispatch(todoSet(res.data)));
  }, []);

  return (
    <div className="d-flex flex-column vw-100 vh-100 px-lg-5 bg-dark">
      <div className="container flex-grow-1  p-4">
        <h3 className="text-center">
          <span className="text-warning">Grud App </span>- Redux
        </h3>

        <AddForm />

        <ListTodos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
