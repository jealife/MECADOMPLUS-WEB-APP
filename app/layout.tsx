import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/navigation/Nav'
import Script from 'next/script'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MACADOM | Marketplace of car mechanics for Home Maintenance services',
  description: 'Mécadom Plus met en relation des particuliers avec des mécaniciens professionnels indépendants pour l’entretien automobile à domicile. ',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      
      <body className={inter.className}>

        <header>
          <Nav />
        </header>
        {children}
        <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"/>
      </body>
    </html>
  )
}

