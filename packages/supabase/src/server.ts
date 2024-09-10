import type { Database } from '@/database'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
	const cookieStore = cookies()

	return createServerClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll: () => cookieStore.getAll(),
				setAll: (cookies) => {
					try {
						cookies.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options),
						)
					} catch {}
				},
			},
		},
	)
}
