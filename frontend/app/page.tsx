import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<main>
				<h1 className="text-5xl font-black">Welcome</h1>
				<div className="@container">
					<div className="mx-auto @sm:w-sm">Enter Daily Expenses</div>
				</div>
			</main>
		</div>
	)
}
