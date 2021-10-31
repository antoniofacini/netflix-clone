import * as S from './styles'
import Image from 'next/image'

const LoginHeader = ({
  background = 'linear-gradient(to bottom,rgba(0, 0, 0, 0.5) 0,rgba(0, 0, 0, 0) 100%)',
  src = '/netflix-logo.svg',
  alt = 'Netflix Logo',
  headerHeight = '90px',
  imageHeight = '45px',
  imageWidth = '160px',
  imageMargin = '0 0 0 3%'
}) => (
  <>
    <S.Header background={background} height={headerHeight}>
      <S.LogoContainer imageMargin={imageMargin}>
        <Image src={src} width={imageWidth} height={imageHeight} alt={alt} />
      </S.LogoContainer>
    </S.Header>
  </>
)

export default LoginHeader
