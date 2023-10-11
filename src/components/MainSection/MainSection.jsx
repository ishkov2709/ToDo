import { useSelector } from 'react-redux';
import ToDo from '../ToDo';
import { Main, Container, ToDoList } from './MainSection.styled';
import useScrollbar from '../../hooks/useScrollbar';
import { useRef } from 'react';

const MainSection = () => {
  const filterText = useSelector(state => state.filterText);
  const todo = useSelector(state => state.todo);
  const filteredList = useSelector(state => state.filteredList);
  const wrapper = useRef(null);

  useScrollbar(wrapper);

  return (
    <Main ref={wrapper}>
      <Container>
        {todo.length > 0 && filteredList.length === 0 && (
          <ToDoList>
            {todo
              .filter(
                ({ name, content }) =>
                  name.includes(filterText) || content.includes(filterText)
              )
              .map(({ id, isCheck, isImportant, name, content }) => (
                <ToDo
                  key={id}
                  id={id}
                  isCheck={isCheck}
                  isImportant={isImportant}
                  name={name}
                  content={content}
                />
              ))}
          </ToDoList>
        )}

        {filteredList.length > 0 && (
          <ToDoList>
            {filteredList
              .filter(
                ({ name, content }) =>
                  name.includes(filterText) || content.includes(filterText)
              )
              .map(({ id, isCheck, isImportant, name, content }) => (
                <ToDo
                  key={id}
                  id={id}
                  isCheck={isCheck}
                  isImportant={isImportant}
                  name={name}
                  content={content}
                />
              ))}
          </ToDoList>
        )}
      </Container>
    </Main>
  );
};

export default MainSection;
