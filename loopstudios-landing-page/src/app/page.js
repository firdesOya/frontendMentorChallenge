


export default function Home() {
  return (
    <>
      <section className="my-32 px-6 container relative mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:items-end text-center lg:text-left ">
        <div className="w-full lg:w-3/5 ">
          <img src="/images/desktop/image-interactive.jpg" />
        </div>
        <div className="w-full lg:w-2/5 px-10 lg:px-0 lg:pl-20 lg:pt-14    bg-white  lg:-ml-60 ">
          <h2 className="text-4xl lg:text-5xl pb-5 uppercase font-josefin text-black">
            The leader in interactive VR
          </h2>
          <p className="font-alata text-[var(--dark-gray)] text-sm">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </section>

    </>
  );
}
