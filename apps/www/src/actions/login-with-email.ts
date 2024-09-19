'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const loginWithEmail = createServerAction()
	.input(z.object({ email: z.string().email() }))
	.handler(async ({ input: { email } }) => {
		const supabase = createClient()

		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: process.env.VERCEL_URL
					? 'https://' + process.env.VERCEL_URL
					: 'http://localhost:3000',
				shouldCreateUser: false,
			},
		})

		if (error) {
			throw 'Something went wrong. Please try again later.'
		}
	})
