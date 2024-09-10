import type { Database } from '@/database'
import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function refreshSession(request: NextRequest) {
	let response = NextResponse.next({ request })

	const supabase = createServerClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll: () => request.cookies.getAll(),
				setAll: (cookies) => {
					cookies.forEach(({ name, value }) => {
						request.cookies.set(name, value)
					})

					response = NextResponse.next({ request })

					cookies.forEach(({ name, value }) => {
						response.cookies.set(name, value)
					})
				},
			},
		},
	)

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (
		!user &&
		!request.nextUrl.pathname.startsWith('/login') &&
		!request.nextUrl.pathname.startsWith('/auth')
	) {
		const url = request.nextUrl.clone()
		url.pathname = '/login'

		return NextResponse.redirect(url)
	}

	return response
}
