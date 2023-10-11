import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - 90px);
`;

export const Container = styled.div`
  padding: 0 12px;
`;

export const ToDoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  list-style: none;
  margin: 0;
  padding: 0;
`;
