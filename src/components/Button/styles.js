import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #c0c0c0;
  width: 100%;
  min-width: 20px;
  height: 100%;
  min-height: 50px;
  background-image: linear-gradient(#ccc, #eee);
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 2px;

  &:hover {
    background-image: linear-gradient(#aaa, #ccc);
  }
`;

export default ButtonContainer;