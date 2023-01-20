import { CredentialsProvider } from 'next-auth/providers';
import NextAuth from 'next-auth';
import { supabase } from '../../../utils/supabaseClient';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) toke.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await supabase.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
      },
    }),
  ],
});
