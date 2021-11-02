import AppTemplate from 'components/Templates/App'
import AppCarouselContainer from 'components/Organisms/AppCarouselContainer'
import AppMainIntro from 'components/Organisms/AppMainIntro'

export default function Profiles() {
  // If no session exists, display access denied message

  return (
    <AppTemplate>
      <AppMainIntro />
      <AppCarouselContainer />
    </AppTemplate>
  )
}
