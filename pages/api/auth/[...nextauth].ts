import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: 'John Doe', email:'john@doe.com' }
        return user ? user : null
      }
    })
  ],
  session: {
    jwt: true
  },

  callbacks: {
    async sessionStorage(session: { user: any }, user: any) {
      const sessionUser = {
        ...session.user,
        user
      }
      return Promise.resolve({ ...session, user: sessionUser })
    },
    async jwt(token: any, user: { id: any }, profile: any) {
      let response = token

      if (user?.id) {
        response = {
          ...token,
          id: user.id
        }
      }
      return Promise.resolve(response)
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
