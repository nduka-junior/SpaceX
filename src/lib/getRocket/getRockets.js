export default async function getRockets() {
    const getRockets = await fetch("https://api.spacexdata.com/v4/rockets");
    const res = await getRockets.json()
    if (!res) throw new Error("Couldn't Fetch Data")
    return res
}
