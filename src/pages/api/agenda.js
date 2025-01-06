const { Client } = require('@notionhq/client')

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_SHOWS_ID

export default async function getDatabase(req, res) {
	try {
		const database = await notion.databases.query({
			database_id: DATABASE_ID
		})

		const database_ = database.results.map((item) => {
			const mapsLink = item.properties["Link GoogleMaps"].rich_text?.[0]?.text.content || null

			function extractDataFromMapsUrl(url) {
				if (!url) return null;
				const result = {};

				// Extrair o nome do lugar (entre "/place/" e "/@")
				const placeMatch = url.match(/\/place\/([^\/]*)\/@/);
				result.place = placeMatch ? encodeURIComponent(decodeURIComponent(placeMatch[1])) : undefined;

				// Extrair latitude e longitude (após "/@")
				const latLngMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
				if (latLngMatch) {
					result.lat = parseFloat(latLngMatch[1]);
					result.long = parseFloat(latLngMatch[2]);
				} else {
					result.lat = undefined;
					result.long = undefined;
				}

				// Extrair o identificador (após "!1s" e antes de "!")
				const idMatch = url.match(/!1s([^!]*)/);
				result.id = idMatch ? idMatch[1] : undefined;

				return result;
			}

			// Usar a função para extrair os dados da URL
			const mapsData = mapsLink ? extractDataFromMapsUrl(mapsLink) : { place: undefined, lat: undefined, long: undefined, id: undefined };

			return {
				id: item.properties["ID"].unique_id.number,
				status: item.properties["Status"].status.name,
				name: item.properties["Nome"]?.title[0]?.text.content || "Sem nome",
				date: item.properties["Data"].date?.start || undefined,
				description: item.properties["Descrição"].rich_text[0]?.text.content || "Sem descrição",
				maps: mapsData,
			}
		}).filter((produto) => produto.status === "Disponível")


		// Ordenar os dados pelo campo `date`
		const sortedDatabase = database_.sort((a, b) => new Date(a.date) - new Date(b.date));

		// Envie a resposta com os dados ordenados
		res.status(200).json(sortedDatabase);


	} catch (error) {
		console.error("Error fetching database:", error)
		res.status(500).json({ error: "Failed to fetch database" })
	}
}