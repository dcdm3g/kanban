'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const deleteBoard = createServerAction()
	.input(z.object({ id: z.string().uuid() }))
	.handler(async ({ input: { id } }) => {
		const supabase = createClient()

		const { data: board } = await supabase
			.from('boards')
			.select()
			.eq('id', id)
			.single()
			.throwOnError()

		if (!board) {
			throw new ZSAError('NOT_FOUND', 'Board not found')
		}

		await supabase.from('boards').delete().eq('id', id).throwOnError()
	})
