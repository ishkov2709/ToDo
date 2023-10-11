import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalCreate, createTodo } from '../../store/todoSlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';

function ModalCreate() {
  const isModalCreate = useSelector(state => state.isModalCreate);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      content: '',
    },
    onSubmit: (values, { resetForm }) => {
      const todo = {
        id: nanoid(),
        isCheck: false,
        isImportant: false,
        ...values,
      };

      dispatch(createTodo(todo));

      resetForm();

      dispatch(toggleModalCreate(false));
    },
  });

  return (
    <>
      <Modal
        show={isModalCreate}
        onHide={() => dispatch(toggleModalCreate(false))}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create ToDo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group as={Col} md="4">
              <Form.Label>ToDo name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Form.Group>
            <Form.Label>Task</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Write your task"
            >
              <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                name="content"
                onChange={formik.handleChange}
                value={formik.values.content}
              />
            </FloatingLabel>
            <Button
              type="submit"
              style={{ margin: '20px 0 0 394px' }}
              disabled={!formik.values.name || !formik.values.content}
            >
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCreate;
