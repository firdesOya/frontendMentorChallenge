export default function Home() {
  return (
    <>
      <section className="h-[500px]">
        <div className="hero absolute top-0 -z-10 "></div>
        <div className="flex flex-col justify-center gap-6 h-full items-center text-center px-6 -mt-4">
          <h1 className="text-overpass text-4xl md:text-6xl  text-white font-semibold ">
            A modern publishing platform
          </h1>
          <p className="text-overpass font-light text-white text-lg md:text-xl pb-4 ">
            Grow your audience and build your online brand
          </p>
          <div className="flex flex-row gap-9 mt-2 ">
            <button className="btn border-transparent text-light-red bg-white hover:bg-very-light-red hover:text-white ">
              Start For Free
            </button>
            <button className="btn text-white border-white hover:bg-white hover:text-light-red">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="w-full relative pt-40 py-[244px] xl:px-2 px-6 overflow-hidden">
        <h2 className="mb-8 md:mb-[100px] text-center text-very-dark-blue">
          Designed for the future
        </h2>
        <div className="hidden lg:block lg:absolute lg:-right-[42%] xl:-right-[18%] lg:top-20 h-full ">
          <img src="/images/illustration-editor-desktop.svg" />
        </div>
        <div className="flex flex-col items-center lg:flex-row max-w-[1140px] mx-auto">
          <div className="lg:hidden order-1 flex justify-center w-full ">
            <img src="/images/illustration-editor-mobile.svg" />
          </div>
          <div className="flex flex-col order-2 pt-3 gap-7 lg:gap-16 w-full lg:max-w-[530px] text-center lg:text-start lg:flex-start">
            <div className="flex flex-col gap-5 md:gap-5">
              <h3>Introducing an extensible editor</h3>
              <p className="p-text">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="flex flex-col gap-5 md:gap-5">
              <h3>Robust content management</h3>
              <p className="p-text">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-circles mt-4">
        <div className="max-w-[1140px] min-w-[320px] mx-auto px-6 xl:px-2 lg:h-[400px] flex flex-col lg:flex-row items-center  lg:justify-between">
          <img
            className="transform md:scale-125 -translate-y-48  md:-translate-y-28 lg:scale-100 lg:translate-y-3 lg:-translate-x-8"
            src="/images/illustration-phones.svg"
          />
          <div className=" md:max-w-[540px] text-center lg:text-start pb-24 md:pb-20  -mt-48 md:-mt-10 lg:pb-0 lg:mt-0">
            <h2 className="text-white">State of the Art Infrastructure</h2>
            <p className="p-text-white pt-8">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-28 max-w-[1140px] mx-auto flex flex-col md:flex-row items-center ">
        <img
          className="w-full hidden md:block h-auto object-cover transform -translate-x-[45%]  "
          src="/images/illustration-laptop-desktop.svg"
        />
        <img
          className="w-full md:hidden block h-auto object-cover"
          src="/images/illustration-laptop-mobile.svg"
        />
        <div className="max-w-[580px] md:-ml-96 ml-0 flex flex-col text-center md:text-start gap-16">
          <div>
            <h3>Free, open, simple</h3>
            <p className="p-text pt-6">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h3>Powerful tooling</h3>
            <p className="p-text pt-6">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
