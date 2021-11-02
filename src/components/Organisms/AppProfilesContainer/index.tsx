import * as S from './styles'
import { useState } from 'react'
import AppProfileCard from '../../Molecules/AppProfileCard'
import AppAddProfile from '../../Molecules/AppAddProfile'

interface Profile {
  id: number
  name: string
}

const AppProfilesContainer = () => {
  const [profileList, setProfileList] = useState([
    {
      id: 1,
      name: 'Antonio'
    },
    {
      id: 2,
      name: 'Joseph'
    },
    {
      id: 3,
      name: 'Dio'
    }
  ])
  return (
    <S.Div>
      <S.Title>Quem está assistindo?</S.Title>
      <S.ProfilesContainer>
        {profileList.map((profile: Profile, key: number) => {
          return <AppProfileCard profile={profile} key={key} />
        })}
        <AppAddProfile />
      </S.ProfilesContainer>
      <S.Button>Gerenciar perfis</S.Button>
    </S.Div>
  )
}
export default AppProfilesContainer
