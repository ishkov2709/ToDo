import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import NavBar from '../NavBar';
import { SideBody, SideHead, Sidebar } from './SideNav.styled';
import { useDispatch } from 'react-redux';
import { changeFilterText } from '../../store/todoSlice';
import { useFormik } from 'formik';

const SideNav = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
  });

  const handleChangeSearch = e => {
    formik.handleChange(e);
    dispatch(changeFilterText(e.target.value));
  };

  return (
    <>
      <Sidebar className="animate__animated animate__fadeInLeftBig">
        <SideHead
          style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="search"
              onChange={handleChangeSearch}
              value={formik.values.search}
            />
          </InputGroup>
        </SideHead>
        <SideBody>
          <NavBar />
        </SideBody>
      </Sidebar>
    </>
  );
};

export default SideNav;
