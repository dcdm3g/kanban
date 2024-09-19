'use client'

import { GitHub } from '@/components/icons/github'
import { Loader } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { createClient } from '@kanban/supabase/client'
import { useState } from 'react'

export function LoginWithGitHubButton() {
	const [isPending, setIsPending] = useState(false)
	const supabase = createClient()

	return (
		<Button
			variant="outline"
			className="flex-1"
			onClick={async () => {
				setIsPending(true)

				await supabase.auth.signInWithOAuth({
					provider: 'github',
					options: {
						redirectTo: new URL(
							'/auth/callback',
							window.location.origin,
						).toString(),
					},
				})
			}}
		>
			{isPending ? (
				<Loader className="size-4 animate-spin" />
			) : (
				<>
					<GitHub className="mr-2 size-4" /> GitHub
				</>
			)}
		</Button>
	)
}
