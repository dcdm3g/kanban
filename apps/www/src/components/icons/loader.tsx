import type { ComponentProps } from 'react'

export function Loader(props: ComponentProps<'svg'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={16}
			height={16}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<title>Please wait</title>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	)
}
