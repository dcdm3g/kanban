import type { ComponentProps } from 'react'

export function ChevronDown(props: ComponentProps<'svg'>) {
	return (
		<svg
			role="graphics-symbol"
			width={10}
			height={7}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				stroke="currentColor"
				strokeWidth={2}
				fill="none"
				d="m1 1 4 4 4-4"
			/>
		</svg>
	)
}
