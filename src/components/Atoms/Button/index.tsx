import * as S from './styles'

const Button = ({ content = 'Entrar', color = '#e50914' }) => {
  return (
    <>
      <S.StyledButton variant="contained" background={color}>
        <span>{content}</span>
      </S.StyledButton>
    </>
  )
}

export default Button
