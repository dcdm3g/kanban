'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const deleteTask = createServerAction()
	.input(z.object({ id: z.string().uuid() }))
	.handler(async ({ input: { id } }) => {
		const supabase = createClient()

		const { data: task } = await supabase
			.from('tasks')
			.select()
			.eq('id', id)
			.single()
			.throwOnError()

		if (!task) {
			throw new ZSAError('NOT_FOUND', 'Task not found')
		}

		await supabase.from('tasks').delete().eq('id', id).throwOnError()
	})
