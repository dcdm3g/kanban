'use server'

import { createClient } from '@kanban/supabase/server'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const addBoard = createServerAction()
	.input(
		z.object({
			name: z.string().trim().min(1, "Can't be empty"),
			columnNames: z.array(z.string().trim().min(1, "Can't be empty")),
		}),
	)
	.output(
		z.object({
			id: z.string().uuid(),
			columns: z.array(z.object({ id: z.string().uuid() })),
		}),
	)
	.handler(async ({ input: { name, columnNames } }) => {
		const supabase = createClient()

		const { data } = await supabase
			.rpc('add_board', {
				name,
				column_names: columnNames,
			})
			.throwOnError()

		const { id, columns } = data as {
			id: string
			columns: { id: string }[]
		}

		return { id, columns }
	})
