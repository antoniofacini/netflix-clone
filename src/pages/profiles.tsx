import AppProfilesContainer from 'components/Organisms/AppProfilesContainer'
import AppTemplate from 'components/Templates/App'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { User } from 'pages/api/user'

export default function Profiles({ user }: { user: User }) {
  // If no session exists, display access denied message

  return <AppTemplate>{user && <AppProfilesContainer />}</AppTemplate>
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res
}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: { isLoggedIn: false, email: '', token: '' }
      }
    }
  }

  return {
    props: { user: req.session.user }
  }
},
sessionOptions)
