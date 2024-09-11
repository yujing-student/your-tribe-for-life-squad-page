import fetchJson from "$lib/fetch-json"

export async function load() {
	// klassen vorig jaar
	const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
	const squadD = await fetchJson(url)

	const url1 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":4}'
	const squadE = await fetchJson(url1)

	const url2 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":5}'
	const squadF = await fetchJson(url2)

	// klassen dit jaar
	const squad= 'https://fdnd.directus.app/items/squad/?filter={%22tribe_id%22:2}'
	const newsquad = await fetchJson(squad)

	// iedereen
	const everyone = 'https://fdnd.directus.app/items/person/'
	const persons = await fetchJson(everyone)


	return {
		persons: persons.data,
		squadD: squadD.data,
		squadE: squadE.data,
		squadF: squadF.data,


		// dit is als de nieuwe klas toegevoegd word
		// https://fdnd.directus.app/items/person/?filter={%22squad_id%22:6}
		newsquad: newsquad.data

	}
}
export let csr = false;