import { type ComponentProps, forwardRef } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const Textarea = forwardRef<
	HTMLTextAreaElement,
	ComponentProps<'textarea'>
>(({ className, ...rest }, ref) => {
	return (
		<textarea
			ref={ref}
			className={cn(
				'flex min-h-[112px] w-full resize-none rounded border border-steel-mist/25 bg-stormy-slate py-2 pr-6 pl-4 font-medium text-body-lg text-midnight-abyss placeholder-midnight-abyss/25 outline-none transition-colors focus-visible:border-indigo-echo dark:text-pure-snow dark:placeholder-pure-snow/25',
				className,
			)}
			{...rest}
		/>
	)
})
