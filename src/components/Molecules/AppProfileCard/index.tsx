import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CurrentUserContext } from '../../../contexts/currentUserContext'

export interface CurrentUser {
  id: number
  name: string
}

const AppProfileCard = (props: { profile: CurrentUser }) => {
  const { setCurrentUser }: any = useContext(CurrentUserContext)
  //router
  const router = useRouter()
  return (
    <S.Div
      onClick={() => {
        setCurrentUser(props.profile)
        router.push('/browse')
      }}
    >
      <Image
        src={`/netflix-avatar-${props.profile.id}.png`}
        layout="responsive"
        width="84px"
        height="84px"
      />
      <div className="hover-border"></div>
      <S.Texto>{props.profile.name}</S.Texto>
    </S.Div>
  )
}
export default AppProfileCard
