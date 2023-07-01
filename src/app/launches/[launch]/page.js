"use client";
import Icons from "@/components/Icons";
import ImageGallery from "@/components/ImageGallery";
import formatDate from "@/lib/date";
import getlaunch from "@/lib/getLaunch/getLaunch";
import getRocket from "@/lib/getRocket/getRocket";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
async function page({ params }) {
  const launch = await getlaunch(params.launch);
  const rocket = await getRocket(launch.rocket);
  return (
    <div className="bg-mainBg  grid grid-cols-2 text-white p-10 ">
      <div className="max-md:col-span-2">
        <h2 className="text-3xl text-blue">{launch.name}</h2>
        <div className="text-[10px]">{formatDate(launch.date_utc)}</div>
        <h2 className="text-[16px] my-5">{launch.details}</h2>
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
      <div className="pt-5   max-md:col-span-2 md:ml-5">
        {
          <ImageList
            sx={{ width: "100%", height: "90vh" }}
            rowHeight={"auto"}
            className="max-sm:!grid-cols-2  lg:!grid-cols-3"
          >
            {launch.links.flickr.original.map((item, id) => (
              <ImageListItem key={id}>
                <img
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  className="m"
                />
              </ImageListItem>
            ))}
          </ImageList>
        }
      </div>
    </div>
  );
}

export default page;
