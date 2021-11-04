import LoginHeader from '../../Organisms/LoginHeader'
import LoginFooter from '../../Organisms/LoginFooter'
import LoginCard from '../../Organisms/LoginCard'
import Image from 'next/image'
import * as S from './styles'

const LoginTemplate = () => (
  <>
    <S.Background>
      <Image
        src={'/background.jpg'}
        alt={'background, movies covers'}
        layout="fill"
        objectFit="cover"
        // objectPosition="50% 50%"
      />
    </S.Background>
    <S.Div />
    <LoginHeader />
    <S.Section>
      <LoginCard />
    </S.Section>
    <LoginFooter />
  </>
)

export default LoginTemplate
