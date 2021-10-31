import * as S from './styles'

const Input = ({ label = 'Email ou número de telefone', type = 'text' }) => {
  return (
    <>
      <S.StyledTextField
        label={label}
        variant="filled"
        margin="normal"
        type={type}
      />
    </>
  )
}

export default Input
