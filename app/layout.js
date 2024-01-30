
import "./globals.css"
import Navbar from '@/components/module/Navbar'
import Footer from '@/components/module/Footer'
import { usePathname } from 'next/navigation'

export const metadata = {
  title: "Peworld",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body>
        <div className='2xl:container 2xl:mx-auto'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
