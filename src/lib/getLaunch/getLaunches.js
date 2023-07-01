export default async function getlaunces() {
  const getlaunches = await fetch("https://api.spacexdata.com/v5/launches", {
    next: { revalidate: 172800 },
  });
  const res = await getlaunches.json();
  if (!res) throw new Error("Unable to fetch data");
  return res;
}
