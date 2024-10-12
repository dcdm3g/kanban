'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const editBoard = createServerAction()
	.input(
		z.object({
			id: z.string().uuid(),
			name: z.string().trim().min(1, "Can't be empty").optional(),
			columns: z
				.array(
					z.object({
						id: z.string().uuid(),
						name: z.string().trim().min(1, "Can't be empty"),
					}),
				)
				.optional(),
		}),
	)
	.handler(async ({ input: { id, name, columns } }) => {
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

		// await supabase.rpc('')
	})
