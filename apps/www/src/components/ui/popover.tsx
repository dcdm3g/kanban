import * as RadixPopover from '@radix-ui/react-popover'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const Popover = RadixPopover.Root
export const PopoverTrigger = RadixPopover.Trigger

export function PopoverContent({
	className,
	children,
	...rest
}: ComponentProps<typeof RadixPopover.Content>) {
	return (
		<RadixPopover.Portal>
			<RadixPopover.Content
				className={cn(
					'data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 slide-in-from-top-2 z-50 w-[16.5rem] rounded-lg bg-pure-snow text-steel-mist shadow outline-none data-[state=closed]:animate-out data-[state=open]:animate-in dark:bg-stormy-slate',
					className,
				)}
				sideOffset={36}
				align="start"
				{...rest}
			>
				{children}
			</RadixPopover.Content>
		</RadixPopover.Portal>
	)
}
