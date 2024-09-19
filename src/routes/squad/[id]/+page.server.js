import fetchJson from "$lib/fetch-json.js";

export async function load({ params }) {
  let squadId = params.id;
  let squadName = "F";

  const url = `https://fdnd.directus.app/items/person/?filter={"squad_id": "${squadId}"}`;
  const data = await fetchJson(url)

  switch (squadId) {
    case 3:
      squadName = "C";
      break;
    case 4:
      squadName = "D";
      break;
  }

  return { data: data.data };
}
