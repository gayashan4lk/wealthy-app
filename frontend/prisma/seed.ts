import { PrismaClient, Prisma } from "@/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import 'dotenv/config'

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({
	adapter
})

const categoryData: Prisma.CategoryCreateInput[] = [
	{
		name: "Shelter",
		transactions: {
			create: [
				{
					amount: 253.44,
					note: "Monthly rent",
					date: new Date("2026-03-01"),
				},
				{
					amount: 85.0,
					note: "Electricity bill",
					date: new Date("2026-03-05"),
				},
			],
		},
	},
	{
		name: "Food & Dining",
		transactions: {
			create: [
				{
					amount: 42.5,
					note: "Grocery run",
					date: new Date("2026-03-02"),
				},
				{
					amount: 18.75,
					note: "Restaurant dinner",
					date: new Date("2026-03-07"),
				},
			],
		},
	},
]

export async function main() {
	for (const c of categoryData) {
		await prisma.category.create({ data: c })
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})