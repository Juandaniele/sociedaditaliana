import './globals.css'

export const metadata = {
  title: 'Sociedad Italiana - Club Social y Deportivo',
  description: 'Un espacio de comunidad en Villa del Rosario, Córdoba, Argentina.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
