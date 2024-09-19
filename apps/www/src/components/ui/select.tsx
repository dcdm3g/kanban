import { ChevronDown } from '@/components/icons/chevron-down'
import * as RadixSelect from '@radix-ui/react-select'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const Select = RadixSelect.Root
export const SelectValue = RadixSelect.Value

export function SelectTrigger({
	className,
	children,
	...rest
}: ComponentProps<typeof RadixSelect.Trigger>) {
	return (
		<RadixSelect.Trigger
			className={cn(
				'inline-flex h-10 w-full items-center justify-between rounded border border-steel-mist/25 px-4 py-2 text-body-lg text-midnight-abyss outline-none transition-colors data-[state=open]:border-indigo-echo dark:text-pure-snow',
				className,
			)}
			{...rest}
		>
			{children}

			<RadixSelect.Icon asChild>
				<ChevronDown className="h-[0.4375rem] w-2.5 text-indigo-echo" />
			</RadixSelect.Icon>
		</RadixSelect.Trigger>
	)
}

export function SelectContent({
	className,
	children,
	...rest
}: ComponentProps<typeof RadixSelect.Content>) {
	return (
		<RadixSelect.Portal>
			<RadixSelect.Content
				className={cn(
					'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 slide-in-from-top-2 z-50 translate-y-2 rounded-lg bg-pure-snow text-steel-mist shadow data-[state=closed]:animate-out data-[state=open]:animate-in dark:bg-shadow-blue',
					className,
				)}
				position="popper"
				{...rest}
			>
				<RadixSelect.Viewport className="h-[var(--radix-select-trigger-height)] w-[var(--radix-select-trigger-width)] px-4 py-3">
					{children}
				</RadixSelect.Viewport>
			</RadixSelect.Content>
		</RadixSelect.Portal>
	)
}

export function SelectItem({
	className,
	children,
	...rest
}: ComponentProps<typeof RadixSelect.Item>) {
	return (
		<RadixSelect.Item
			className={cn(
				'w-full select-none py-1 font-medium text-body-lg outline-none',
				className,
			)}
			{...rest}
		>
			<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
		</RadixSelect.Item>
	)
}
