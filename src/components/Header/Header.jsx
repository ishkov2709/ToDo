import Offcanvas from 'react-bootstrap/Offcanvas';
import { Wrapper, Container } from './Header.styled';
import Button from 'react-bootstrap/Button';
import { BsJournalPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleModalCreate } from '../../store/todoSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        <Offcanvas.Title style={{ color: '#fff', fontSize: '30px' }}>
          ToDo
        </Offcanvas.Title>
        <Button
          variant="dark"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
          onClick={() => dispatch(toggleModalCreate(true))}
        >
          <BsJournalPlus size={30} />
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
