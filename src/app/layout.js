import { Poppins, Nunito_Sans } from 'next/font/google'

// Styles
import './globals.scss'

// Layout
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '900'], variable: "--font-poppins" })
const nunito_sans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '900'], variable: "--font-nunitosans" })

export const metadata = {
  title: {
    template: '%s | Habibi House Labs',
    default: 'Habibi House Labs', // a default is required when creating a template
  },
  description: 'Software Development and Venture Capital Agency',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${poppins.variable} ${nunito_sans.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
