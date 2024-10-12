'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const editTask = createServerAction()
	.input(
		z.object({
			id: z.string().uuid(),
			name: z.string().trim().min(1).optional(),
			description: z.string().trim().min(1).optional(),
			subtasks: z.array(
				z.object({
					id: z.string().uuid().nullable(),
					text: z.string().trim().min(1),
				}),
			),
			columnId: z.string().uuid().optional(),
		}),
	)
	.handler(async ({ input: { id, name, description, subtasks, columnId } }) => {
		const supabase = createClient()

		const task = await supabase
			.from('tasks')
			.select()
			.eq('id', id)
			.single()
			.throwOnError()

		if (!task) {
			throw new ZSAError('NOT_FOUND', 'Task not found')
		}

		const column = await supabase
			.from('columns')
			.select()
			.eq('id', id)
			.single()
			.throwOnError()

		if (!column) {
			throw new ZSAError('NOT_FOUND', 'Column not found')
		}

		// await supabase.rpc('edit_task')
	})
