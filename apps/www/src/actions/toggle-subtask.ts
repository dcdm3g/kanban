'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const toggleSubtask = createServerAction()
	.input(z.object({ id: z.string().uuid() }))
	.handler(async ({ input: { id } }) => {
		const supabase = createClient()

		const { data: subtask } = await supabase
			.from('subtasks')
			.select()
			.eq('id', id)
			.single()
			.throwOnError()

		if (!subtask) {
			throw new ZSAError('NOT_FOUND', 'Subtask not found')
		}

		await supabase.rpc('toggle_subtask', { id }).throwOnError()
	})
