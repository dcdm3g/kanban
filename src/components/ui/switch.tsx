import * as RadixSwitch from '@radix-ui/react-switch'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export function Swicth({
	className,
	...rest
}: ComponentProps<typeof RadixSwitch.Root>) {
	return (
		<RadixSwitch.Root
			className={cn(
				'inline-flex h-5 w-10 items-center rounded-xl bg-indigo-echo outline-none',
				className,
			)}
			{...rest}
		>
			<RadixSwitch.Thumb className="size-3.5 rounded-full bg-pure-snow transition-transform data-[state=checked]:translate-x-[1.4375rem] data-[state=unchecked]:translate-x-[0.1875rem]" />
		</RadixSwitch.Root>
	)
}
