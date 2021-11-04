import * as S from './styles'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleRounded'
import { useRouter } from 'next/router'

const AppAddProfile = () => {
  //router
  const router = useRouter()
  return (
    <S.Div onClick={() => router.push('/browse')}>
      <S.Icon>
        <AddCircleOutlinedIcon
          style={{
            color: 'grey',
            width: 'max(6vw,50px)',
            height: 'max(6vw,50px)'
          }}
        />
      </S.Icon>
      <S.Texto>Adicionar perfil</S.Texto>
    </S.Div>
  )
}
export default AppAddProfile
