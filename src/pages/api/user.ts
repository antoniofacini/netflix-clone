// import withSession from '../../lib/session'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

// export default withSession(async (req, res) => {
// const user = req.session.get('user')
export type User = {
  isLoggedIn: boolean
  email: string
  token: string
}

export default withIronSessionApiRoute(userRoute, sessionOptions)

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true
    })
  } else {
    res.json({
      isLoggedIn: false,
      email: '',
      token: ''
    })
  }
}
//   if (user) {
//     // in a real world application you might read the user id from the session and then do a database request
//     // to get more information on the user if needed
//     res.json({
//       isLoggedIn: true,
//       ...user
//     })
//   } else {
//     res.json({
//       isLoggedIn: false,
//       email: ''
//     })
//   }
// })
