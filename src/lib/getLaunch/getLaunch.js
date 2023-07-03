export default async function getlaunch(id) {
  const getlaunch = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  console.log(getlaunch, "getlaunch");
  if (getlaunch.ok ==false) {
    return { 
        notFound: true,
      }
  }
  if (getlaunch.ok == true) { 
    const res = await getlaunch.json();
    console.log(res, "res");

    return res;
  }
  
}
