import formatDate from "@/lib/date";
import getlaunces from "@/lib/getLaunch/getLaunches";
import Image from "next/image";
import Icons from "@/components/Icons";
import Link from "next/link";

//  name
// date
// details
// rocket
// flicker
// links

async function page() {
  const launches = await getlaunces();

  return (
    <div className="bg-[#060606f1]  text-white  p-10">
      <h1 className="text-xl mb-4 text-blue">
        No of results: {launches.length}
      </h1>
      {launches.slice(0, 100).map((launch) => {
        return launch.details != null && launch.links.patch.large != null ? (
          <div key={launch.id} className="hover:bg-[#1c1c1c]  hover:scale-105  bg-[#2f2f31]  hover:ease-in  px-6 py-8  mb-4 duration-300">
            <Link href={launch.id ? `/launches/${launch.id}` : ""}>
              <div className=" flex justify-start items-start  max-sm:flex-column w-[auto]">
                <div>
                  <div className="flex items-center ">
                    <h1 className="text-2xl max-sm:text-xl">{launch.name}</h1>
                    <div className="ml-2">
                      <Image
                        src={launch.links.patch.small}
                        width={100}
                        height={100}
                        alt={launch.name}
                        className="h-[30px] w-[30px] object-contain  "
                      />
                    </div>
                  </div>
                  <h2 className="text-xs mb-2">
                    {formatDate(launch.date_local)}
                  </h2>

                  <p className="text-[14px] max-sm:text-[12px] tracking-wide">
                    {launch.details.substring(0, 135)}....
                  </p>
                </div>
              </div>
            </Link>
            <Icons
              youtube={launch.links.webcast}
              article={launch.links.article}
              wikipedia={launch.links.wikipedia}
            />
          </div>
        ) : null;
      })}
    </div>
  );
}

export default page;
