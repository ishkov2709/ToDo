import styled from 'styled-components';

export const Sidebar = styled.aside`
  width: 400px;
  min-height: 100vh;
  padding: 24px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
  );
`;

export const SideHead = styled.div``;

export const SideBody = styled.div`
  display: flex;
  flex-flow: column;
  min-height: calc(100vh - 140px);
`;
