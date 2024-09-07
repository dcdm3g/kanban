import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const DropdownMenu = RadixDropdownMenu.Root
export const DropdownMenuTrigger = RadixDropdownMenu.Trigger

export function DropdownMenuContent({
	className,
	...rest
}: ComponentProps<typeof RadixDropdownMenu.Content>) {
	return (
		<RadixDropdownMenu.Portal>
			<RadixDropdownMenu.Content
				className={cn(
					'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 slide-in-from-top-2 z-50 min-w-48 rounded-lg bg-pure-snow px-4 py-2 text-steel-mist shadow data-[state=closed]:animate-out data-[state=open]:animate-in dark:bg-shadow-blue',
					className,
				)}
				sideOffset={40}
				{...rest}
			/>
		</RadixDropdownMenu.Portal>
	)
}

export function DropdownMenuItem({
	className,
	...rest
}: ComponentProps<typeof RadixDropdownMenu.Item>) {
	return (
		<RadixDropdownMenu.Item
			className={cn(
				'select-none py-2 font-medium text-body-lg outline-none',
				className,
			)}
			{...rest}
		/>
	)
}
