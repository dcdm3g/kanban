import type { ComponentProps } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const button = tv({
	base: 'inline-flex items-center justify-center font-bold outline-none transition-colors disabled:pointer-events-none disabled:opacity-25',
	variants: {
		size: {
			default: 'h-10 rounded-[1.25rem] text-body-lg',
			lg: 'h-12 rounded-3xl text-heading-md',
		},
		variant: {
			default: 'bg-indigo-echo text-pure-snow hover:bg-lavender-mist',
			secondary:
				'bg-indigo-echo/10 text-indigo-echo hover:bg-indigo-echo/25 dark:bg-pure-snow dark:hover:bg-pure-snow',
			destructive: 'bg-crimson-blaze text-pure-snow hover:bg-blush-pink',
		},
	},
	defaultVariants: {
		size: 'default',
		variant: 'default',
	},
})

interface ButtonProps
	extends ComponentProps<'button'>,
		VariantProps<typeof button> {}

export function Button({ className, size, variant, ...rest }: ButtonProps) {
	return (
		<button
			type="button"
			className={button({ className, size, variant })}
			{...rest}
		/>
	)
}
