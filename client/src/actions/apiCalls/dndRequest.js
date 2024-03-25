export async function getFromDndApi(route) {
  return fetch("https://www.dnd5eapi.co" + route)
    .then((res) => res.json())
    .then((data) => data);
}
