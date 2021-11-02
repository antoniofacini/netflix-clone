// import Image from 'next/image'
import * as S from './styles'
// import useUser from '../../../lib/useUser'
import AppHeader from '../../Organisms/AppHeader'
const AppTemplate = (props: any) => {
  //   const { user } = useUser({ redirectTo: '/' })
  return (
    <S.Div>
      <AppHeader />
      <S.MainContent>{props.children}</S.MainContent>
    </S.Div>
  )
}

export default AppTemplate
