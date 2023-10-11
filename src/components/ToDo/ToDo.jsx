import { Item, Text, BtnGroup, Title, ContentWrapper } from './ToDo.styled';
import Button from 'react-bootstrap/Button';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  toggleCheck,
  toggleImportant,
  toggleModalEdit,
} from '../../store/todoSlice';

const ToDo = ({ id, isCheck, isImportant, name, content }) => {
  const dispatch = useDispatch();

  return (
    <Item id={id}>
      <Form.Check type="checkbox" id={`check-api-checkbox`}>
        <Form.Check.Input
          type="checkbox"
          checked={isCheck}
          onChange={() => dispatch(toggleCheck(id))}
        />
      </Form.Check>
      <ContentWrapper>
        <Title>{name}</Title>
        <Text>{content}</Text>
      </ContentWrapper>
      <BtnGroup>
        <Button
          variant="outline-dark"
          onClick={() =>
            dispatch(
              toggleModalEdit({ id, isCheck, isImportant, name, content })
            )
          }
        >
          <BiEditAlt size={22} />
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => dispatch(toggleImportant(id))}
        >
          {isImportant ? <AiFillStar size={22} /> : <AiOutlineStar size={22} />}
        </Button>
        <Button variant="outline-dark" onClick={() => dispatch(deleteTodo(id))}>
          <BsTrash size={22} />
        </Button>
      </BtnGroup>
    </Item>
  );
};

export default ToDo;
