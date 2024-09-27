import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [action, setAction] = useState('');

  const handleCurrentNumber = (number) => {
    setCurrentNumber((prev) => `${(prev === 0) ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
    setCurrentNumber(0);
  }

  const handleEqualTo = () => {
    handleOnClear();

    if (action === "+") {
      handleSum();
    } else if (action === "-") {
      handleSub();
    } else if (action === "/") {
      handleDiv();
    } else if (action === "*") {
      handleMult();
    }
  };

  const handleOperator = (operator) => {
    handleOnClear();
    setAction(operator);
    setFirstNumber(currentNumber);
  };

  const handleSum = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(sum);
  };

  const handleSub = () => {
    const sum = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(sum);
  };

  const handleDiv = () => {
    const sum = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(sum);
  };

  const handleMult = () => {
    const sum = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(sum);
  };
  
  return (
    <Container>
      <h1>Simple Calculator</h1>
      <Content>
        <Display value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleCurrentNumber("7")} />
          <Button label="8" onClick={() => handleCurrentNumber("8")} />
          <Button label="9" onClick={() => handleCurrentNumber("9")} />
          <Button label="/" onClick={() => handleOperator("/")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleCurrentNumber("4")} />
          <Button label="5" onClick={() => handleCurrentNumber("5")} />
          <Button label="6" onClick={() => handleCurrentNumber("6")} />
          <Button label="*" onClick={() => handleOperator("*")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleCurrentNumber("1")} />
          <Button label="2" onClick={() => handleCurrentNumber("2")} />
          <Button label="3" onClick={() => handleCurrentNumber("3")} />
          <Button label="-" onClick={() => handleOperator("-")} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleCurrentNumber("0")} />
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="=" onClick={() => handleEqualTo()} />
          <Button label="+" onClick={() => handleOperator("+")} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
