import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 0 10px;
  height: 50px;
  background-color: #aaffaa;
  font-size: 24px;
  font-family: monospace;
  padding: 0px;
  margin-bottom: 10px;

  input {
    width: 100%;
    height: 50px;
    border: 0;
    background-color: #aaffaa;
    text-align: right;
    font-size: 24px;
    padding: 0 10px;
  }
`;

export default DisplayContainer;