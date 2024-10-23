import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

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
			<body
				className={cn(
					'min-h-screen bg-dark-300 font-plusjakart antialiased',
					plusjakart.variable
				)}
			>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
