export default async function getlaunch(id) {
  const getlaunch = await fetch(
    `https://api.spacexdata.com/v5/launches/${id}`
  );
  const res = await getlaunch.json();
  if (!res) throw new Error("Unable to fetch data");
  return res;
}
