import styled from '@emotion/styled';
export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  outline: 2px solid #1e1e1e;
  background-color: lightgrey;
  color: #1e1e1e;
  & p {
    padding: 5px;
  }
  & span {
    color: red;
  }
`;
export const WrapContainer = styled.div`
  display: flex;
  width: 450px;
  justify-content: center;
  align-items: center;
  & p {
    flex-basis: 150px;
    height: 100px;
    outline: 1px solid #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #1e1e1e;
  }
  & span {
    width: 100%;
    height: 50%;
    color: red;
  }
`;
