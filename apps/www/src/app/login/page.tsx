import { LoginWithEmailForm } from '@/components/login-with-email-form'
import { LoginWithGitHubButton } from '@/components/login-with-github-button'
import { LoginWithGoogleButton } from '@/components/login-with-google-button'

export default function Login() {
	return (
		<main className="grid min-h-screen lg:grid-cols-2">
			<div className="flex items-center justify-center bg-pure-snow px-4 py-12 dark:bg-stormy-slate">
				<div className="w-full max-w-md">
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-heading-xl text-midnight-abyss dark:text-pure-snow">
							Login to Kanban
						</h1>

						<h2 className="text-pretty font-bold text-heading-md text-steel-mist">
							Plan projects, track tasks, all in one place.
						</h2>
					</div>

					<LoginWithEmailForm />

					<div className="my-4 flex items-center gap-2">
						<div className="h-px flex-1 bg-frosted-sky dark:bg-twilight-gray" />

						<span className="font-medium text-body-md text-steel-mist uppercase">
							OR CONTINUE WITH
						</span>

						<div className="h-px flex-1 bg-frosted-sky dark:bg-twilight-gray" />
					</div>

					<div className="flex gap-2.5">
						<LoginWithGoogleButton />
						<LoginWithGitHubButton />
					</div>
				</div>
			</div>

			<div className="hidden h-full bg-pale-ice lg:block dark:bg-shadow-blue" />
		</main>
	)
}
