import jwt from 'jsonwebtoken'
import withSession from '../../lib/session'

const secret = process.env.SECRET_COOKIE_PASSWORD

export default withSession(async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body
    console.log(req.body)
    if (email == 'antonio@provi.com.br' && password == 'provi2021') {
      const token = jwt.sign({ email }, secret, { expiresIn: '1h' })
      const user = { isLoggedIn: true, token }
      req.session.set('user', user)
      await req.session.save()
      res.status(200).json(user)
    } else {
      res.status(401).json({
        error: 'Usuário ou senha inválidos'
      })
    }
  }
})
