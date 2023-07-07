
import ImageGallery from "@/components/ImageGallery";
import Tabs from "@/components/Tab";
import getRocket from "@/lib/getRocket/getRocket";


export async function generateMetadata({ params,  }) {
  // read route params
  const id = params.rocketid;


  // return a dynamic title
  return {
    title: `Rocket - ${id}`,
  };
}
async function page({params} ) {
  const rocket = await getRocket(params.rocketid);
  
    
  return (
    <div className=" p-10 grid grid-cols-2 max-md:grid-cols-1  gap-2  lg:h-[95vh]   bg-[#060606f1] h-[auto]">
      <div className="  max-md:mt-4">
        <ImageGallery images={rocket.flickr_images} />
      </div>
      {/* 1c1c1c 2f2f31 */}
      <div className=" max-md:row-start-1  text-white h-[auto]  p-9 bg-[#1c1c1c]">
        <h1 className="text-3xl text-blue font-semibold mb-2">{rocket.name}</h1>
        <div className="text-base/[24px]  ">
          <p>{rocket.description}</p>
          <h5>
            Active: <span>{JSON.stringify(rocket.active)}</span>
          </h5>
          <h5>
            First flight: <span>{rocket.first_flight}</span>
          </h5>
          <h5>
            Company: <span>{rocket.company} </span>
          </h5>
          <h5>
            Wikipedia:
            <span className="hover:text-slate-300 text-blue">
              <a href={rocket.wikipedia}> {rocket.wikipedia}</a>
            </span>
          </h5>
        </div>
        <Tabs rocket={rocket} />
      </div>
    </div>
  );
}

export default page;
