export default async function getlaunch(id) {
      const getlaunches = await fetch(`https://api.spacexdata.com/v5/launches${id}`);
      const res = await getlaunches.json();
      if (!res) throw new Error("Unable to fetch data");
      return res;
}