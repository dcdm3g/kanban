'use client'

import { addBoard } from '@/actions/add-board'
import { toggleSubtask } from '@/actions/toggle-subtask'
import { Button } from '@/components/ui/button'
import { useServerAction } from 'zsa-react'

export default function Home() {
	const { execute, error } = useServerAction(addBoard)

	async function handleClick() {
		await execute({
			name: '12345678-1234-1234-1234-123456789abc',
			columnNames: ['TODO', 'DONE'],
		})

		console.log('Hi')
	}

	return (
		<Button onClick={handleClick}>
			Hello World! {JSON.stringify(error) ?? 'no error'}
		</Button>
	)
}
