import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineStar, AiOutlineCheckCircle } from 'react-icons/ai';
import { ImInfinite } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterOfCheck,
  filterOfImportant,
  resetFilers,
} from '../../store/todoSlice';

const NavBar = () => {
  const isImportantFilter = useSelector(state => state.isImportantFilter);
  const isCheckFilter = useSelector(state => state.isCheckFilter);
  const dispatch = useDispatch();
  return (
    <>
      <Nav
        defaultActiveKey="/home"
        className="flex-column"
        style={{ gap: '10px' }}
      >
        <Button
          variant="light"
          style={{ textAlign: 'start' }}
          onClick={() => dispatch(resetFilers())}
        >
          <ImInfinite
            size={30}
            style={{ marginRight: '10px' }}
            color="#ff9767"
          />
          All
        </Button>
        <Button
          variant="light"
          style={{ textAlign: 'start' }}
          onClick={() => dispatch(filterOfImportant())}
          disabled={isImportantFilter}
        >
          <AiOutlineStar
            size={30}
            style={{ marginRight: '10px' }}
            color="#ff7d7d"
          />
          Important
        </Button>
        <Button
          variant="light"
          style={{ textAlign: 'start' }}
          onClick={() => dispatch(filterOfCheck())}
          disabled={isCheckFilter}
        >
          <AiOutlineCheckCircle
            size={30}
            style={{ marginRight: '10px' }}
            color="#72cc76"
          />
          Completed
        </Button>
      </Nav>
    </>
  );
};

export default NavBar;
