import type React from "react"
import "./globals.css"
import { Montserrat, IBM_Plex_Sans } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})

export const metadata = {
  title: "VaViM and VaVAM: Autonomous Driving through Video Generative Modeling",
  description: "Project page for VaViM and VaVAM autonomous driving models",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${ibmPlexSans.variable} font-sans bg-[#F5F5F7] text-black`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'