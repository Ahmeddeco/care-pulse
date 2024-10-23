import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const plusjakart = localFont({
	src: './fonts/PlusJakartaSans-VariableFont_wght.ttf',
	variable: '--font-plusjakart-sans',
})

export const metadata: Metadata = {
	title: 'Care Pulse',
	description: 'Care Pulse by Ahmed Abdelfattah',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${plusjakart.variable} antialiased`}>{children}</body>
		</html>
	)
}
