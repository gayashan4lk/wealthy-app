import { PrismaClient, Prisma } from "@/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import 'dotenv/config'

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({
	adapter
})

const categoryData: Prisma.CategoryCreateInput[]= [
	{
		name: "Shelter",
		transactions: {
			create: [
				{
					amount: 253.44,
					note: "This is a test transaction",
					date: new Date(),

				}
			]
		}
	}
]

export async function main(){
	for (const c of categoryData){
		await prisma.category.create({data: c})
	}
}