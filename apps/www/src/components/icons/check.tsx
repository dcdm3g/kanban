import type { ComponentProps } from 'react'

export function Check(props: ComponentProps<'svg'>) {
	return (
		<svg
			role="graphics-symbol"
			width={10}
			height={8}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				d="m1.276 3.066 2.756 2.756 5-5"
			/>
		</svg>
	)
}
