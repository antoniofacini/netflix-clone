import type { IronSessionOptions } from 'iron-session'
import type { User } from 'pages/api/user'

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'proviflix',
  cookieOptions: {
    // the next line allows to use the session in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    // secure: process.env.NODE_ENV === 'production'
  }
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}
