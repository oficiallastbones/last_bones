const { Client } = require('@notionhq/client')

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_PRODUTOS_ID

export default async function getDatabase(req, res) {
	try {
		const database = await notion.databases.query({
			database_id: DATABASE_ID
		})

		const database_ = database.results.map((item) => ({
			id: item.properties["ID"].unique_id.number,
			status: item.properties["Ativo"].status.name,
			name: item.properties["Nome"]?.title[0]?.text.content || "Sem nome",
			price: item.properties["Valor (R$)"]?.number ?? "Preço não informado",
			description: item.properties["Descrição"].rich_text[0]?.text.content || "Sem descrição",
			img: item.properties["Imagem do Produto"].files?.[0]
				? {
					name: item.properties["Imagem do Produto"].files[0].name,
					url: item.properties["Imagem do Produto"].files[0].file.url
				}
				: {
					name: "Imagem não adicionada",
					url: "/images/banner_2.jpg"
				}
		})).filter((produto) => produto.status === "Disponível")

		// Envie a resposta com os dados
		res.status(200).json(database_);

	} catch (error) {
		console.error("Error fetching database:", error)
		res.status(500).json({ error: "Failed to fetch database" })
	}
}