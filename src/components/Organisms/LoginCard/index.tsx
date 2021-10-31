import * as S from './styles'
import Input from '../../../components/Atoms/Input'
import Button from '../../../components/Atoms/Button'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

interface IFormInputs {
  email: string
  password: string
}

const LoginCard = () => {
  const { handleSubmit, control } = useForm<IFormInputs>()

  const submitLogin: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <S.Div>
      <S.Main>
        <S.Title>Entrar</S.Title>
        <form onSubmit={handleSubmit(submitLogin)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                label="Email ou número de telefone"
                type="text"
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input label="Senha" type="password" {...field} />
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
