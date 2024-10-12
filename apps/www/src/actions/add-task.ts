'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const addTask = createServerAction()
	.input(
		z.object({
			title: z.string().trim().min(1, "Can't be empty"),
			description: z.string().trim().min(1, "Can't be empty").optional(),
			subtasks: z.array(z.string().trim().min(1, "Can't be empty")),
			columnId: z.string().uuid(),
		}),
	)
	.output(z.object({ id: z.string().uuid() }))
	.handler(async ({ input: { title, description, subtasks, columnId } }) => {
		const supabase = createClient()

		const { data: id } = await supabase
			.rpc('add_task', {
				title,
				description,
				subtasks,
				column_id: columnId,
			})
			.throwOnError()

		return { id: id! }
	})
