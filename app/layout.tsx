import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Hi</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
