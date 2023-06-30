export default async function getRocket(id) {
  const getRocket = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
  const res = await getRocket.json();
  if (!res) throw new Error("Could'nt fetch data");
  return res;
}
