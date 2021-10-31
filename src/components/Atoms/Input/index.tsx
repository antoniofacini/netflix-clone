import * as S from './styles'

const Input = ({
  label = 'Email ou número de telefone',
  type = 'text',
  ...otherProps
}) => {
  return (
    <>
      <S.StyledTextField
        {...otherProps}
        label={label}
        variant="filled"
        margin="normal"
        type={type}
      />
    </>
  )
}

export default Input
