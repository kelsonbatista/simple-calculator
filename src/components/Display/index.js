import DisplayContainer from "./styles";

const Display = (props) => {
  const { value } = props;

  return (
    <>
      <DisplayContainer>
        <input disabled value={value} />
      </DisplayContainer>
    </>
  );
}

export default Display
