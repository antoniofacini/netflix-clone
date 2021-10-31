const Login = async ({ body, method }, res) => {
  if (method === 'POST') {
    const { username, password } = body
    if (username == 'antonio@provi.com.br' && password == 'provi2021') {
      res.status(200).json({ token: '123456789', id: 1, name: 'Antonio' })
    } else {
      res.status(401).json({
        error: 'Usuário ou senha inválidos'
      })
    }
  }
}

export default Login
