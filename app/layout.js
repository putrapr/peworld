import "./globals.css"
export const metadata = {
  title: "Peworld",
  description: "Generated by create next app",
};

import BaseLayout from './base-layout'
export default function RootLayout({ children }) {  
  return (
    <html lang="en">      
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
