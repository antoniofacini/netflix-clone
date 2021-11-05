import { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useRef } from 'react'
import { CurrentUserContext } from '../../../contexts/currentUserContext'

const AppHeader = ({
  background = 'linear-gradient(to bottom,rgba(0, 0, 0, 0.5) 0,rgba(0, 0, 0, 0) 100%)',
  src = '/netflix-logo.svg',
  alt = 'Netflix Logo',
  headerHeight = '68px',
  imageHeight = '31px',
  imageWidth = '95px',
  imageMargin = '0 0 0 3%',
  scroll = 0
}) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const router = useRouter()
  const { currentUser }: any = useContext(CurrentUserContext)
  //out click ref

  const handleExit = () => axios.post('/api/logout')
  return (
    <>
      <S.Header
        background={scroll < 50 ? background : 'rgb(20, 20, 20)'}
        height={headerHeight}
      >
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

                <S.MenuLinkTrigger
                  onClick={() => setOpenMobileMenu(!openMobileMenu)}
                >
                  Navegar
                </S.MenuLinkTrigger>
                {openMobileMenu && (
                  <S.MenuLink>
                    <S.Arrow></S.Arrow>
                    <S.TopBar></S.TopBar>
                    <S.Link>Inicio</S.Link>
                    <S.Link>Series</S.Link>
                    <S.Link>Filmes</S.Link>
                    <S.Link>Bombando</S.Link>
                    <S.Link>Minha lista</S.Link>
                    <S.Link>Assista de novo</S.Link>
                  </S.MenuLink>
                )}
              </>
            ) : null}
          </S.LeftContainer>
          <S.RightContainer>
            {router != null && router.asPath != '/profiles' ? (
              <>
                <S.MenusContainer>
                  <S.SearchInput placeholder="Buscar" />
                  <S.UserMenuTrigger
                    onClick={() => setOpenUserMenu(!openUserMenu)}
                  >
                    <Image
                      alt={'avatar do usuario'}
                      src={`/netflix-avatar-${currentUser.id}.png`}
                      width="32px"
                      height="32px"
                    />
                    <S.UserName>{currentUser.name}</S.UserName>
                  </S.UserMenuTrigger>
                  {openUserMenu && (
                    <S.MenuUser>
                      <S.UserArrow></S.UserArrow>
                      <S.TopBar></S.TopBar>
                      <S.UserMenuLink>Trocar de perfil</S.UserMenuLink>
                      <S.UserMenuLink>Conta</S.UserMenuLink>
                      <S.UserMenuLink>Centro de Ajuda</S.UserMenuLink>
                      <S.UserMenuLink onClick={() => handleExit()}>
                        Sair da Netflix
                      </S.UserMenuLink>
                    </S.MenuUser>
                  )}
                </S.MenusContainer>
              </>
            ) : null}
          </S.RightContainer>
        </S.HeaderContainer>
      </S.Header>
    </>
  )
}

export default AppHeader
