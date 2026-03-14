import CreateExpenseForm from '@/components/app/create-expense-form'
import TestComponent from '@/components/app/test-component'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<main>
				<div className="@container">
					<h1 className="mx-auto mb-4 px-4 text-2xl font-black @sm:w-sm">
						Wealthy App
					</h1>
					<div className="mx-auto px-4 @sm:w-sm">
						Enter Daily Expenses
						<CreateExpenseForm />
					</div>
				</div>
			</main>
		</div>
	)
}
