'use client'

import { loginWithEmail } from '@/actions/login-with-email'
import { Loader } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { useServerAction } from 'zsa-react'

export function LoginWithEmailForm() {
	const [email, setEmail] = useState('')

	const { isPending, execute } = useServerAction(loginWithEmail, {
		onSuccess: () => toast.success('We sent a magic link to your email.'),
		onError: ({ err }) => toast.error(err.message),
	})

	const parsedEmail = z.string().email().safeParse(email)
	const canSubmit = parsedEmail.success

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				execute({ email }).then(() => setEmail(''))
			}}
			className="mt-6 flex flex-col gap-4"
		>
			<label htmlFor="email">
				<Input
					id="email"
					placeholder="Enter your email address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<Button
				className="transition-all"
				disabled={!canSubmit || isPending}
				type="submit"
			>
				{isPending ? (
					<Loader className="size-4 animate-spin" />
				) : (
					'Login to Kanban'
				)}
			</Button>
		</form>
	)
}
