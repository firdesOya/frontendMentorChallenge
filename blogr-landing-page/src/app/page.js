
export default function Home() {
  return (
    <>
      <section className="h-[500px]">
        <div className="hero absolute top-0 -z-10 ">
        </div>
        <div className="flex flex-col justify-center gap-6 h-full items-center text-center px-6 -mt-5">
          <h1 className="text-overpass text-4xl md:text-6xl  text-white font-semibold ">A modern publishing platform</h1>
          <p className="text-overpass font-light text-white text-lg md:text-xl pb-4 ">Grow your audience and build your online brand</p>
          <div className="flex flex-row gap-9 mt-2 ">
            <button className="btn border-transparent text-light-red bg-white hover:bg-very-light-red hover:text-white ">Start For Free</button>
            <button className="btn text-white border-white hover:bg-white hover:text-light-red">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}
