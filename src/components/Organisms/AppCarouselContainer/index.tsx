import * as S from './styles'
import AppCarousel from '../AppCarousel'

const AppCarouselContainer = () => {
  return (
    <S.Div>
      <AppCarousel title="Filmes" />
      <AppCarousel title="Aventura" />
      <AppCarousel title="Terror" />
      <AppCarousel title="Continue assistindo" />
    </S.Div>
  )
}

export default AppCarouselContainer
