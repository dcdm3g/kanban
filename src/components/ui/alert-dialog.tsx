import { button } from '@/components/ui/button'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import type { ComponentProps } from 'react'
import { cnBase as cn } from 'tailwind-variants'

export const AlertDialog = RadixAlertDialog.Root
export const AlertDialogTrigger = RadixAlertDialog.Trigger

export function AlertDialogContent({
	className,
	...rest
}: ComponentProps<typeof RadixAlertDialog.Content>) {
	return (
		<RadixAlertDialog.Portal>
			<RadixAlertDialog.Overlay className="data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-50 bg-pure-ebony/50 data-[state=closed]:animate-out data-[state=open]:animate-in" />

			<RadixAlertDialog.Content
				className={cn(
					'-translate-x-1/2 -translate-y-1/2 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-1/2 left-1/2 z-50 flex w-dialog flex-col gap-6 rounded-md bg-pure-snow p-6 duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in md:p-8 md:pb-10 dark:bg-stormy-slate',
					className,
				)}
				{...rest}
			/>
		</RadixAlertDialog.Portal>
	)
}

export function AlertDialogTitle({
	className,
	...rest
}: ComponentProps<typeof RadixAlertDialog.Title>) {
	return (
		<RadixAlertDialog.Title
			className={cn('font-bold text-crimson-blaze text-heading-lg', className)}
			{...rest}
		/>
	)
}

export function AlertDialogDescription({
	className,
	...rest
}: ComponentProps<typeof RadixAlertDialog.Description>) {
	return (
		<RadixAlertDialog.Description
			className={cn('font-medium text-body-lg text-steel-mist', className)}
			{...rest}
		/>
	)
}

export function AlertDialogFooter({
	className,
	...rest
}: ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'flex flex-col gap-4 md:flex-row md:[&>button]:flex-1',
				className,
			)}
			{...rest}
		/>
	)
}

export function AlertDialogAction({
	className,
	...rest
}: ComponentProps<typeof RadixAlertDialog.Action>) {
	return (
		<RadixAlertDialog.Action
			className={button({ className, variant: 'destructive' })}
			{...rest}
		/>
	)
}

export function AlertDialogCancel({
	className,
	...rest
}: ComponentProps<typeof RadixAlertDialog.Cancel>) {
	return (
		<RadixAlertDialog.Cancel
			className={button({ className, variant: 'secondary' })}
			{...rest}
		/>
	)
}
