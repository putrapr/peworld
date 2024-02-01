import "./globals.css"
import BaseLayout from './base-layout'

export const metadata = {
  title: "Peworld",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {  
  return (
    <html lang="en">      
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
