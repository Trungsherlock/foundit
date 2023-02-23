import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';

import { readFileSync } from 'fs';
import path from 'path';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// const emailsDir = path.resolve(process.cwd(), 'emails');

// const sendVerificationRequest = ({ identifier , url} : { identifier : string , url: string}) => {
//   const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
//     encoding: 'utf8',
//   });
//   const emailTemplate = Handlebars.compile(emailFile);
//   transporter.sendMail({
//     from: `"🔎 Found It" ${process.env.EMAIL_FROM}`,
//     to: identifier,
//     subject: "Your sign-in link for Found It",
//     html: emailTemplate({
//       base_url: process.env.NEXTAUTH_URL,
//       signin_url: url,
//       email: identifier,
//     }),
//   });
// };

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_SERVER_HOST,
//   port: process.env.EMAIL_SERVER_PORT,
//   auth: {
//     user: process.env.EMAIL_SERVER_USER,
//     pass: process.env.EMAIL_SERVER_PASSWORD,
//   },
//   secure: true,
// })

export default NextAuth({
    providers: [
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
        maxAge: 10 * 60,
      }),
    ],
    adapter: PrismaAdapter(prisma),
  });