import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className="bg-[url('../static/launch.jpeg')] h-[90vh] text-white bg-no-repeat bg-center  bg-cover relative">
          <div className="  flex  flex-col justify-between  mx-[50px] absolute bottom-[40%] ">
            <h1 className="text-5xl tracking-wider max-sm:text-3xl">
              SpaceX Launch
            </h1>

            <Link
              className="p-4 ease-in-out duration-300 hover:bg-[#3433333b]  !w-[60%] border-white border-[2px]
            border-solid  text-xl max-sm:text-xs mt-3"
              href={"./launches"}
            >
              View Launches {">>>"}
            </Link>
          </div>
        </div>
        <div className="bg-[url('../static/rocket.jpeg')] h-[90vh] text-white bg-no-repeat bg-center  bg-cover relative">
          <div className="  flex  flex-col justify-between  mx-[50px] absolute bottom-[40%] ">
            <h1 className="text-5xl tracking-wider max-sm:text-3xl">
              SpaceX Rocket
            </h1>

            <Link
              className="p-4 ease-in-out duration-300 hover:bg-[#3433333b]  !w-[60%] border-white border-[2px]
            border-solid  text-xl max-sm:text-xs mt-3"
              href={"./rockets"}
            >
              
              View Rockets {">>>"}
            </Link>
          </div>
        </div>
        <div className="bg-[url('../static/starlink.jpeg')] h-[90vh] text-white bg-no-repeat bg-center  bg-cover relative">
          <div className="  flex  flex-col justify-between  mx-[50px] absolute bottom-[40%] ">
            <h1 className="text-5xl tracking-wider max-sm:text-3xl">
              SpaceX Rocket
            </h1>

            <Link
              className="p-4 ease-in-out duration-300 hover:bg-[#3433333b]  !w-[60%] border-white border-[2px]
            border-solid  text-xl max-sm:text-xs mt-3"
              href={"./starlink"}
            >
             Starlink Map {">>>"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
