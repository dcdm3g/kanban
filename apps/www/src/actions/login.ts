'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const login = createServerAction()
	.input(z.object({ email: z.string().email() }))
	.handler(async ({ input: { email } }) => {
		const supabase = createClient()

		await supabase.auth.signInWithOtp({
			email,
			options: {
				shouldCreateUser: false,
				emailRedirectTo: process.env.VERCEL_URL
					? 'https://' + process.env.VERCEL_URL
					: 'http://localhost:3000',
			},
		})
	})
