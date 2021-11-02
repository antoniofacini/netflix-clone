import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Profile {
  name: string
  id: number
}

const AppProfileCard = (props: { profile: Profile }) => {
  //router
  const router = useRouter()
  return (
    <S.Div onClick={() => router.push('/browse')}>
      <Image
        src={`/netflix-avatar-${props.profile.id}.png`}
        layout="responsive"
        width="10vw"
        height="10vw"
      />
      <div className="hover-border"></div>
      <S.Texto>{props.profile.name}</S.Texto>
    </S.Div>
  )
}
export default AppProfileCard
