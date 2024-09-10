import * as RadixDialog from '@radix-ui/react-dialog'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const Dialog = RadixDialog.Root
export const DialogTrigger = RadixDialog.Trigger

export function DialogContent({
	className,
	...rest
}: ComponentProps<typeof RadixDialog.Content>) {
	return (
		<RadixDialog.Portal>
			<RadixDialog.Overlay className="data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-50 bg-pure-ebony/50 data-[state=closed]:animate-out data-[state=open]:animate-in" />

			<RadixDialog.Content
				className={cn(
					'-translate-x-1/2 -translate-y-1/2 data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-1/2 left-1/2 z-50 flex w-dialog flex-col gap-6 rounded-md bg-stormy-slate p-6 data-[state=closed]:animate-out data-[state=open]:animate-in md:p-8',
					className,
				)}
				{...rest}
			/>
		</RadixDialog.Portal>
	)
}

export function DialogTitle({
	className,
	...rest
}: ComponentProps<typeof RadixDialog.Title>) {
	return (
		<RadixDialog.Title
			className={cn(
				'font-bold text-heading-lg text-midnight-abyss dark:text-pure-snow',
				className,
			)}
			{...rest}
		/>
	)
}

export function DialogDescription({
	className,
	...rest
}: ComponentProps<typeof RadixDialog.Description>) {
	return (
		<RadixDialog.Description
			className={cn('font-medium text-body-lg text-steel-mist', className)}
			{...rest}
		/>
	)
}
