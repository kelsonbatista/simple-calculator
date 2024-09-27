import ButtonContainer from "./styles"

const Button = (props) => {
  const { label, onClick } = props
  
  return (
    <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
  )
}

export default Button
