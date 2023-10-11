import { useDispatch, useSelector } from 'react-redux';
import MainContainer from './components/MainContainer/MainContainer';
import ModalCreate from './components/ModalCreate';
import ModalEdit from './components/ModalEdit';
import SideNav from './components/SideNav';
import { useEffect } from 'react';
import {
  filterOfCheck,
  filterOfImportant,
  resetFilers,
} from './store/todoSlice';

import 'overlayscrollbars/overlayscrollbars.css';

function App() {
  const modalEdit = useSelector(state => state.modalEdit);
  const todo = useSelector(state => state.todo);
  const isImportantFilter = useSelector(state => state.isImportantFilter);
  const isCheckFilter = useSelector(state => state.isCheckFilter);
  const filteredList = useSelector(state => state.filteredList);
  const dispatch = useDispatch();

  console.log(filteredList);

  useEffect(() => {
    if (todo && isImportantFilter) {
      dispatch(filterOfImportant());
    }
  }, [dispatch, isImportantFilter, todo]);

  useEffect(() => {
    if (todo && isCheckFilter) {
      dispatch(filterOfCheck());
    }
  }, [dispatch, isCheckFilter, todo]);

  useEffect(() => {
    if ((isImportantFilter || isCheckFilter) && filteredList.length === 0) {
      dispatch(resetFilers());
    }
  }, [dispatch, isImportantFilter, isCheckFilter, filteredList]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(to right, #fc00ff, #00dbde)',
        overflow: 'hidden',
      }}
    >
      <SideNav />
      <MainContainer />
      <ModalCreate />
      {modalEdit && <ModalEdit modalEdit={modalEdit} />}
    </div>
  );
}

export default App;
