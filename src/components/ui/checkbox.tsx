import { Check } from '@/components/icons/check'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export function Checkbox({
	className,
	...rest
}: ComponentProps<typeof RadixCheckbox.Root>) {
	return (
		<RadixCheckbox.Root
			className={cn(
				'peer size-4 rounded-sm border border-steel-mist/25 bg-pure-snow data-[state=checked]:bg-indigo-echo dark:bg-stormy-slate',
				className,
			)}
			{...rest}
		>
			<RadixCheckbox.Indicator className="flex items-center justify-center">
				<Check className="text-pure-snow" />
			</RadixCheckbox.Indicator>
		</RadixCheckbox.Root>
	)
}
