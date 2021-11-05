import AppTemplate from 'components/Templates/App'
import AppCarouselContainer from 'components/Organisms/AppCarouselContainer'
import AppMainIntro from 'components/Organisms/AppMainIntro'
import { User } from 'pages/api/user'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from 'lib/session'

export default function Browse({ user }: { user: User }) {
  return (
    <AppTemplate>
      {user && (
        <>
          <AppMainIntro />
          <AppCarouselContainer />
        </>
      )}
    </AppTemplate>
  )
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
