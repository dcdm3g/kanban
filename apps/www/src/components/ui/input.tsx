import { type ComponentProps, forwardRef } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
	({ className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(
					'flex h-10 w-full rounded border border-steel-mist/25 bg-pure-snow px-4 py-2 font-medium text-body-lg text-midnight-abyss placeholder-midnight-abyss/25 outline-none transition-colors focus-visible:border-indigo-echo data-[error=true]:border-crimson-blaze dark:bg-stormy-slate dark:text-pure-snow dark:placeholder-pure-snow/25',
					className,
				)}
				{...rest}
			/>
		)
	},
)
