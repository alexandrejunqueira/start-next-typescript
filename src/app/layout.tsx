import { ReactNode } from 'react'

import '@/app/globals.css'

export default async function Layout ({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className='h-full bg-gray-300' suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
