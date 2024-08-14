import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
 

const handler = NextAuth({
  providers: [
    GoogleProvider({
        name: 'google',
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        
      }),
    CredentialsProvider({
      id: 'sign-in',
      credentials: {
        email: {label: 'Email', type:'email'},
        password: { label: 'Password', type: 'password' },

      },
      authorize: async (credentials) => {
        console.log("melllo")

        const res = await fetch('https://akil-backend.onrender.com/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
        });

        const user = await res.json();

        console.log("signed in user", user.data)

        if (res.ok && user.data) {
          return user.data;
        } else {
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: 'verify',
      credentials: {
        email: {label: 'Email', type:'email'},
        OTP: { label: 'OTP', type: 'text' },

      },
      authorize: async (credentials) => {
        console.log("verify my a**", credentials)
        const res = await fetch('https://akil-backend.onrender.com/verify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.OTP
          }),
        });

        const user = await res.json();

        console.log("verified user", user.data)

        if (res.ok && user.data) {
          return user.data;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/signup",
    verifyRequest: "/verify-email"
    
  },
  
  callbacks: {
    async session({ session, token }) {
      console.log('ses', session, token)
      return session;
    },
    async jwt({ token, user }) {
      console.log("ayo jwt", user, token)
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },
  },
});

export { handler as GET, handler as POST };
