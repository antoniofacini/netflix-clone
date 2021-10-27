import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'Boilerplate for projects using React.'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="logo react avancado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero.svg" alt="personagem-digitando-cogido" />
  </S.Wrapper>
)

export default Main
