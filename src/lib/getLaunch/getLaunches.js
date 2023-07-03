import notFound from "@/app/launches/[launch]/not-found";

export default async function getlaunces() {
  const getlaunches = await fetch("https://api.spacexdata.com/v5/launches", {
    next: { revalidate: 172800 },
  });
  if (getlaunches.status === 404) return notFound
  const res = await getlaunches.json();
  
  return res;
}
