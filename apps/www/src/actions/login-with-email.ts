'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const loginWithEmail = createServerAction()
	.input(z.object({ email: z.string().email() }))
	.handler(async ({ input: { email } }) => {
		const supabase = createClient()
		const { error } = await supabase.auth.signInWithOtp({ email })

		if (error) {
			throw new ZSAError()
		}
	})
