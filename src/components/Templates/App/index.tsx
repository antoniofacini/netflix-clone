// import Image from 'next/image'
import { useState, useEffect } from 'react'
import * as S from './styles'
// import useUser from '../../../lib/useUser'
import AppHeader from '../../Organisms/AppHeader'
const AppTemplate = (props: any) => {
  //   const { user } = useUser({ redirectTo: '/' })
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <S.Div>
      <AppHeader scroll={scrollPosition} />
      <S.MainContent>{props.children}</S.MainContent>
    </S.Div>
  )
}

export default AppTemplate
