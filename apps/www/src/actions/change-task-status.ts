'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const editTaskColumn = createServerAction()
	.input(z.object({ id: z.string().uuid(), columnId: z.string().uuid() }))
	.handler(async ({ input: { id, columnId } }) => {
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

		const { data: column } = await supabase
			.from('columns')
			.select()
			.eq('id', columnId)
			.single()
			.throwOnError()

		if (!column) {
			throw new ZSAError('NOT_FOUND', 'Column not found')
		}

		await supabase
			.from('tasks')
			.update({ column_id: columnId })
			.eq('id', id)
			.throwOnError()
	})
