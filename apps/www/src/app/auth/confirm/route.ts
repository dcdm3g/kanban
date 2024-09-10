import type { EmailOtpType } from '@kanban/supabase/sdk'
import { createClient } from '@kanban/supabase/server'
import { redirect } from 'next/navigation'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl

	const token_hash = searchParams.get('token_hash')
	const type = searchParams.get('type') as EmailOtpType | null
	const next = searchParams.get('next') ?? '/'

	if (!token_hash || !type) {
		return NextResponse.json(
			{ message: 'Invalid search params' },
			{
				status: 400,
			},
		)
	}

	const supabase = createClient()

	const { error } = await supabase.auth.verifyOtp({
		token_hash,
		type,
	})

	if (error) {
		return NextResponse.json(
			{ message: error.message },
			{ status: error.status },
		)
	}

	redirect(next)
}
