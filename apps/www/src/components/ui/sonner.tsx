'use client'

import { useTheme } from 'next-themes'
import type { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-pure-snow group-[.toaster]:border-steel-mist/25 group-[.toaster]:shadow-sm dark:group-[.toaster]:bg-stormy-slate',
					title:
						'group-[.toast]:text-midnight-abyss dark:group-[.toast]:text-pure-snow',
					description: 'group-[.toast]:text-steel-mist',
					actionButton:
						'group-[.toast]:bg-indigo-echo group-[.toast]:text-pure-snow',
					cancelButton:
						'group-[.toast]:bg-indigo-echo/10 group-[.toast]:text-indigo-echo dark:group-[.toast]:bg-pure-snow',
					error: 'group-[.toaster]:[&_svg]:text-crimson-blaze',
					success: 'group-[.toaster]:[&_svg]:text-verdant-spark',
				},
			}}
			{...props}
		/>
	)
}

export { Toaster }
