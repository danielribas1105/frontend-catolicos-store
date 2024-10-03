import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const font = Roboto({
   subsets: ['latin'],
   weight: "400"
})

export const metadata: Metadata = {
   title: "Católicos Store",
   description: "Sua loja de artigos religiosos",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={font.className}>
            {children}
         </body>
      </html>
   )
}
