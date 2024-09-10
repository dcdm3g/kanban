'use client'

import { Label } from '@/components/ui/label'
import { Slot } from '@radix-ui/react-slot'
import {
	type ComponentProps,
	createContext,
	forwardRef,
	useContext,
	useId,
} from 'react'
import {
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	useFormContext,
} from 'react-hook-form'
import { cnBase as cn } from 'tailwind-variants'

export const Form = FormProvider

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = { name: TName }

const FormFieldContext = createContext<FormFieldContextValue | null>(null)

export function FormField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerProps<TFieldValues, TName>) {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	)
}

function useFieldError() {
	const formFieldContext = useContext(FormFieldContext)
	const { getFieldState, formState } = useFormContext()

	if (!formFieldContext) {
		throw new Error('useFormField should be used within <FormField>')
	}

	const fieldState = getFieldState(formFieldContext.name, formState)

	return fieldState.error?.message
}

type FormItemContextValue = { id: string }
const FormItemContext = createContext<FormItemContextValue | null>(null)

export function FormItem({ className, ...rest }: ComponentProps<'div'>) {
	const id = useId()

	return (
		<FormItemContext.Provider value={{ id }}>
			<div className={cn('space-y-2', className)} {...rest} />
		</FormItemContext.Provider>
	)
}

function useFieldId() {
	const formItemContext = useContext(FormItemContext)

	if (!formItemContext) {
		throw new Error('useFormId should be used within <FormItem>')
	}

	return formItemContext.id
}

export function FormLabel(props: ComponentProps<typeof Label>) {
	const id = useFieldId()

	return <Label htmlFor={id} {...props} />
}

export function FormControl(props: ComponentProps<typeof Slot>) {
	const id = useFieldId()
	const error = useFieldError()

	return (
		<div className="relative w-full">
			<Slot
				id={id}
				data-error={!!error}
				aria-invalid={!!error}
				aria-describedby={error && id + '-message'}
				{...props}
			/>

			{error && (
				<span
					id={id + '-message'}
					className="-translate-y-1/2 absolute top-1/2 right-4 font-medium text-body-lg text-crimson-blaze"
				>
					{error}
				</span>
			)}
		</div>
	)
}
