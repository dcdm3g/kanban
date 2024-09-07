import * as RadixLabel from '@radix-ui/react-label'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export function Label({ className, ...rest }: ComponentProps<'label'>) {
	return (
		<RadixLabel.Root
			className={cn(
				'font-bold text-body-md text-steel-mist dark:text-pure-snow',
				className,
			)}
			{...rest}
		/>
	)
}
