import fetchJson from "$lib/fetch-json.js"

export async function load() {
    // const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
    const url = 'https://fdnd.directus.app/items/person/9'
    const persons = await fetchJson(url)
    return {
        persons: persons.data
    }
}