import AppTemplate from 'components/Templates/App'
import AppCarouselContainer from 'components/Organisms/AppCarouselContainer'
import AppMainIntro from 'components/Organisms/AppMainIntro'

export default function Browse() {
  return (
    <AppTemplate>
      <AppMainIntro />
      <AppCarouselContainer />
    </AppTemplate>
  )
}
