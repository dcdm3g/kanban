'use client'

import { Google } from '@/components/icons/google'
import { Loader } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { createClient } from '@kanban/supabase/client'
import { useState } from 'react'

export function LoginWithGoogleButton() {
	const [isPending, setIsPending] = useState(false)
	const supabase = createClient()

	return (
		<Button
			onClick={async () => {
				setIsPending(true)

				await supabase.auth.signInWithOAuth({
					provider: 'google',
					options: {
						redirectTo: new URL(
							'/auth/callback',
							window.location.origin,
						).toString(),
					},
				})
			}}
			variant="outline"
			className="flex-1"
		>
			{isPending ? (
				<Loader className="size-4 animate-spin" />
			) : (
				<>
					<Google className="mr-2 size-4" /> Google
				</>
			)}
		</Button>
	)
}
