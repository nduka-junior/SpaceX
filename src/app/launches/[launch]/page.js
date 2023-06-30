import Icons from "@/components/Icons";
import formatDate from "@/lib/date";
import getlaunch from "@/lib/getLaunch/getLaunch";
import getRocket from "@/lib/getRocket/getRocket";
import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
async function page({ params }) {
  const launch = await getlaunch(params.launch);
  const rocket = await getRocket(launch.rocket);
  return (
    <div className="bg-mainBg  grid grid-cols-2 text-white p-5 ">
      <div className="max-md:col-span-2">
        <h2 className="text-3xl text-blue">{launch.name}</h2>
        <div className="text-[10px]">{formatDate(launch.date_utc)}</div>
        <h2 className="text-sm my-5">{launch.details}</h2>
        <h2 className="text-sm">
          Rocket used:
          <span className="text-blue">
            <Link href={`/rockets/${launch.rocket}`}> {rocket.name}</Link>
          </span>
        </h2>
        <div className="flex  mt-1 flex-row items-center">
          <h2 className="text-sm ">Success:</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="ml-1"
          >
            <path
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
              className="fill-blue "
            />
          </svg>
        </div>
        <Icons
          youtube={launch.links.webcast}
          wikipedia={launch.links.wikipedia}
          article={launch.links.article}
        />
      </div>
      <div className=" flex justify-center">
        <Image
          style={{ height: "100%!important" }}
          src={launch.links.patch.large}
          width={200}
          height={200}
          alt={launch.links.patch.name}
        />
      </div>
    </div>
  );
}

export default page;
