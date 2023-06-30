import getRockets from "@/lib/getRocket/getRockets";
import React from "react";
import RocketItem from "@/components/RocketItem";
import Link from "next/link";

export const metadata = {
  title: "SpaceX Rocket",
};
function formatCurrency(number) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return formattedNumber;
}

async function page() {
  const rockets = await getRockets();
  console.log(rockets);
  return (
    <div className="bg-[#060606f1] p-10">
      <p className="text-5xl text-white">Rockets</p>
      <div className="grid grid-cols-1 h-full xl:h-[93vh] sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   ">
        {rockets.map((rocket, id) => {
          return (
            <div className="my-5 pr-5 flex flex-col ">
              <RocketItem key={id} rocket={rocket} />
              <div className="flex justify-between items-center">
                <h2
                  className="text-2xl 
                text-white hover:text-slate-300"
                >
                  {rocket.name}
                </h2>

                <Link href={`/rockets/${rocket.id}`}>
                  <p
                    className="text-sm 
                text-slate-200 hover:text-white"
                  >
                    {" see more >>>"}
                  </p>
                </Link>
              </div>

              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
