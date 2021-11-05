import jwt from 'jsonwebtoken'
import type { User } from './user'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SECRET_COOKIE_PASSWORD
export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body
    if (email == 'antonio@provi.com.br' && password == 'provi2021') {
      const token = jwt.sign({ email }, secret as string, { expiresIn: '1h' })
      const user = { isLoggedIn: true, email, token } as User
      req.session.user = user
      await req.session.save()
      res.status(200).json(user)
    } else {
      res.status(401).json({
        error: 'Usuário ou senha inválidos'
      })
    }
  }
}
