import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { toggleModalEdit, updateTodo } from '../../store/todoSlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';

function ModalEdit({ modalEdit }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: modalEdit.name,
      content: modalEdit.content,
    },
    onSubmit: (values, { resetForm }) => {
      const todo = {
        ...modalEdit,
        ...values,
      };

      dispatch(updateTodo(todo));
      dispatch(toggleModalEdit(null));
      resetForm();
    },
  });

  return (
    <>
      <Modal show={modalEdit} onHide={() => dispatch(toggleModalEdit(null))}>
        <Modal.Header closeButton>
          <Modal.Title>Edit ToDo</Modal.Title>
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
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEdit;
