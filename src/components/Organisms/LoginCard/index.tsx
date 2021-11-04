import { useState } from 'react'
import * as S from './styles'
import Input from '../../../components/Atoms/Input'
import Button from '../../../components/Atoms/Button'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'

interface IFormInputs {
  email: string
  password: string
}
interface ResponsesAxios {
  data: {
    token: string
    id: string
    name: string
  }
}
const LoginCard = () => {
  const [error, setError] = useState(undefined)
  const wrongPassword =
    'Desculpe, email ou senha inválido(s). Verifique os dados preenchidos.'
  const genericError =
    'Ops encontramos um error, tente novamente mais tarde ou entre em contato com o suporte.'
  //router
  const router = useRouter()

  const { handleSubmit, control } = useForm<IFormInputs>()
  const submitLogin: SubmitHandler<IFormInputs> = (data) => {
    try {
      axios
        .post('api/login', data)
        .then((res: ResponsesAxios) => {
          window.localStorage.setItem('token', res.data.token)
          router.push('/profiles')
        })
        .catch((e) => {
          setError(e.response.status)
          console.log(e)
        })
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   handleAxiosError(error)
      // } else {
      //   handleUnexpectedError(error)
      // }
    }
  }

  return (
    <S.Div>
      <S.Main>
        <S.Title>Entrar</S.Title>
        <form onSubmit={handleSubmit(submitLogin)}>
          {error && (
            <S.Error>{error == '401' ? wrongPassword : genericError}</S.Error>
          )}

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <Input
                label="Email ou número de telefone"
                type="text"
                style={{
                  border: fieldState.error ? '1px solid red' : null
                }}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <Input
                label="Senha"
                type="password"
                style={{
                  border: fieldState.error ? '1px solid red' : null
                }}
                {...field}
              />
            )}
          />

          <S.ButtonContainer>
            <Button content="Entrar" />
          </S.ButtonContainer>
        </form>
        <S.FormHelper>
          <S.CheckboxText>
            <S.Checkbox type="checkbox" />
            Lembre-se de mim
          </S.CheckboxText>
          <S.Help>Precisa de ajuda?</S.Help>
        </S.FormHelper>
      </S.Main>

      <S.Facebook>Conectar com o Facebook</S.Facebook>
      <S.NewUser>
        Novo por aqui? <S.NewUserLink>Assine agora.</S.NewUserLink>
      </S.NewUser>
      <S.Captcha>
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não
        é um robô. <S.CaptchaButton>Saiba mais.</S.CaptchaButton>
      </S.Captcha>
    </S.Div>
  )
}

export default LoginCard
