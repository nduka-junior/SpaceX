export default async function getStarlink() { 
    const getStarlink = await fetch("https://api.spacexdata.com/v4/starlink", {
      next: { revalidate: 1 },
    });
    const res = await getStarlink.json();
    if (res.ok = false) throw new Error("Couldn't Fetch Data")
    return res
}