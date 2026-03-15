import './globals.css'

export const metadata = {
  title: 'AstraSea - Mastery of Sea',
  description: 'Premium Marine Industries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}