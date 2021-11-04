import * as S from './styles'

const Input = ({
  label = 'Email ou número de telefone',
  type = 'text',
  error = true,
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
        error={error}
      />
    </>
  )
}

export default Input
