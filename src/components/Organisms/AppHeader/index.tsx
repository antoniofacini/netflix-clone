import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

const AppHeader = ({
  background = 'linear-gradient(to bottom,rgba(0, 0, 0, 0.5) 0,rgba(0, 0, 0, 0) 100%)',
  src = '/netflix-logo.svg',
  alt = 'Netflix Logo',
  headerHeight = '68px',
  imageHeight = '31px',
  imageWidth = '95px',
  imageMargin = '0 0 0 3%'
}) => {
  const router = useRouter()

  return (
    <>
      <S.Header background={background} height={headerHeight}>
        <S.HeaderContainer>
          <S.LeftContainer>
            <S.LogoContainer imageMargin={imageMargin}>
              <Image
                src={src}
                width={imageWidth}
                height={imageHeight}
                alt={alt}
              />
            </S.LogoContainer>
            {router != null && router.asPath != '/profiles' ? (
              <>
                <S.LinksContainer>
                  <S.Link>Inicio</S.Link>
                  <S.Link>Series</S.Link>
                  <S.Link>Filmes</S.Link>
                  <S.Link>Bombando</S.Link>
                  <S.Link>Minha lista</S.Link>
                  <S.Link>Assista de novo</S.Link>
                </S.LinksContainer>
              </>
            ) : null}
          </S.LeftContainer>
          <S.RightContainer>
            {router != null && router.asPath != '/profiles' ? (
              <>
                <S.MenusContainer>Aqui</S.MenusContainer>
              </>
            ) : null}
          </S.RightContainer>
        </S.HeaderContainer>
      </S.Header>
    </>
  )
}

export default AppHeader
