import AppProfilesContainer from 'components/Organisms/AppProfilesContainer'
import AppTemplate from 'components/Templates/App'

export default function Profiles() {
  // If no session exists, display access denied message

  return (
    <AppTemplate>
      <AppProfilesContainer />
    </AppTemplate>
  )
}
