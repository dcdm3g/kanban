import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { ReactNode } from 'react'
import '@/lib/tailwind-variants'
import './globals.css'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Kanban',
	description:
		'Streamline task management with our Kanban board app for a smooth, efficient experience.',
}

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={plus_jakarta_sans.className}>{children}</body>
		</html>
	)
}
