import CardList from "./components/CardList";



export default function Home() {
  return (
    <>
      <section className="mt-[160px] mb-[150px] lg:mb-[185px] max-w-[1140px] lg:h-[500px] mx-auto px-6 xl:px-1 flex flex-col gap-10 lg:gap-0 lg:relative lg:flex-row items-center lg:items-end text-center lg:text-left ">
        <div className="w-full h-full lg:w-2/3 ">
          <img className="w-full h-full object-cover" src="/images/desktop/image-interactive.jpg" />
        </div>
        <div className="w-full lg:w-1/2 lg:h-[300px] bg-white md:pt-16 lg:pl-10 lg:pr-6 lg:pt-20 xl:pr-0 xl:pl-[100px] lg:absolute lg:bottom-0 lg:right-0  ">
          <h2 className="pb-6">
            The leader in interactive VR
          </h2>
          <p className="font-alata text-[var(--dark-gray)] ">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="max-w-[1140px] mx-auto px-6 xl:px-1 pb-20 md:pb-40 items-center flex flex-col md:flex-row flex-wrap gap-5 md:gap-0 md:justify-between">
        <h2 className="order-1 ">Our creations</h2>
        <button className="px-[52px] py-2 order-3 md:order-2 uppercase font-alata text-sm tracking-wider border border-solid border-black hover:bg-black hover:text-white">See All</button>
        <div className="order-2 lg:order-3 md:py-20">
          <CardList />
        </div>
      </section>

    </>
  );
}
