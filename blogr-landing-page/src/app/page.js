
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
      <section className="max-w-[1140px] mx-auto  mt-[165px] md:px-2 px-6">
        <h2 className="mb-8 md:mb-[100px] text-center">
          Designed for the future
        </h2>
        <div className="flex flex-col md:flex-row relative">
          <div className="md:order-2 md:absolute -right-48 -top-48">
            <img src="/images/illustration-editor-desktop.svg" />
          </div>
          <div className="flex flex-col md:order-1 pt-3 gap-7 md:gap-16 w-full md:max-w-[530px] text-center md:text-start md:flex-start">
            <div className="flex flex-col gap-5 md:gap-5">
              <h3>Introducing an extensible editor</h3>
              <p className="p-text">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
            </div>
            <div className="flex flex-col gap-5 md:gap-5">
              <h3>Robust content management</h3>
              <p className="p-text">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
