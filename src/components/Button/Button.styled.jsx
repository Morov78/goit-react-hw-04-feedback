import styled from '@emotion/styled';
export const ButtonStyle = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  min-width: 100px;
  cursor: pointer;
  background-color: #f0f0f0;
  transition: background-color 0.5s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.3) inset;
  }
`;
