import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CurrentUserContext } from '../../../contexts/currentUserContext'

export interface CurrentUser {
  id: number
  name: string
}

const AppProfileCard = ({
  profile = { name: 'Antonio', id: 1 }
}: {
  profile: CurrentUser
}) => {
  const { setCurrentUser }: any = useContext(CurrentUserContext)
  //router
  const router = useRouter()

  return (
    <S.Div
      onClick={() => {
        setCurrentUser(profile)
        router.push('/browse')
      }}
    >
      <Image
        src={`/netflix-avatar-${profile.id}.png`}
        layout="responsive"
        width="84px"
        height="84px"
      />
      <div className="hover-border"></div>
      <S.Texto>{profile.name}</S.Texto>
    </S.Div>
  )
}
export default AppProfileCard
