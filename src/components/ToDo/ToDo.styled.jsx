import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 8px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
  );
`;

export const ContentWrapper = styled.div`
  margin: 0 auto 0 20px;
`;

export const Title = styled.b``;

export const Text = styled.p`
  margin: 0;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 6px;
`;
