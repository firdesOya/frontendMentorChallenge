import CardList from "./components/CardList";



export default function Home() {
  return (
    <>
      <section className="my-32 px-6 max-w-[1140px]  mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:items-end text-center lg:text-left ">
        <div className="w-full  lg:w-3/5 flex-grow">
          <img className="w-full " src="/images/desktop/image-interactive.jpg" />
        </div>
        <div className="w-full lg:w-2/5  px-10 lg:px-0 lg:pl-10 lg:pt-16 xl:pl-20 xl:pt-24    bg-white  lg:-ml-36 lg:-mb-1">
          <h2 className=" pb-5  ">
            The leader in interactive VR
          </h2>
          <p className="font-alata   text-[var(--dark-gray)] text-sm">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="max-w-[1140px] mx-auto px-6 items-center flex flex-col md:flex-row flex-wrap gap-5 md:gap-0 md:justify-between">
        <h2 className="order-1 ">Our creations</h2>
        <button className="px-14 py-1 order-3 md:order-2 mb-20 md:mb-0 font-alata border border-solid border-black hover:bg-black hover:text-white">See All</button>
        <div className="order-2 lg:order-3 md:my-14">
          <CardList />
        </div>
      </section>

    </>
  );
}
