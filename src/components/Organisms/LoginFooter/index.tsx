import * as S from './styles'
import { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'

const LoginFooter = () => {
  const [language, setLanguage] = useState('pt-br')

  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterTop>
          Dúvidas? Ligue <S.A href="tel:+08007614631">0800-761-4631</S.A>
        </S.FooterTop>
        <S.Ul>
          <S.Li>
            <S.ASmall>Perguntas frequentes</S.ASmall>
          </S.Li>
          <S.Li>
            <S.ASmall>Centro de ajuda</S.ASmall>
          </S.Li>
          <S.Li>
            <S.ASmall>Termos de uso</S.ASmall>
          </S.Li>
          <S.Li>
            <S.ASmall>Privacidade</S.ASmall>
          </S.Li>
          <S.Li>
            <S.ASmall>Preferências de cookies</S.ASmall>
          </S.Li>
          <S.Li>
            <S.ASmall>Informações corporativas</S.ASmall>
          </S.Li>
        </S.Ul>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <S.MUISelect
            variant="outlined"
            value={language}
            onChange={(e) => setLanguage(e.target.value as string)}
          >
            <S.Option value="pt-br">Português</S.Option>
            <S.Option value="en-us">English</S.Option>
          </S.MUISelect>
        </FormControl>
      </S.FooterContent>
    </S.Footer>
  )
}

export default LoginFooter
