import { imageLogo } from "./constant/config";


export default function Home() {
  return (
    <>
      <section className="max-w-[1140px] mx-auto flex flex-col  gap-10 md:justify-between md:flex-row md:pb-20 pt-5 md:pt-12 ">
        <div className="flex md:max-w-[500px] order-2 md:order-1 flex-col px-6 md:px-0 pt-24 items-center text-center md:text-start md:items-start gap-5 md:gap-14 ">
          <h1 className="text-4xl md:text-7xl font-bold text-almost-black">Make <br className="md:block hidden" /> remote work</h1>
          <p className="text-medium-gray w-full md:max-w-[460px]">Get your team in sync,no matter your loaction.Streamline processes,create team rituals,and watch productivity soar.</p>
          <button className="bg-almost-black px-6 md:px-8 py-4 font-bold text-sm md:text-base text-almost-white border border-transparent rounded-xl hover:border-almost-black hover:text-almost-black hover:bg-almost-white">Learn more</button>
          <div className="flex flex-row  items-center gap-5 md:gap-8 pt-3 pb-20 md:pt-14">
            {imageLogo.map((item) => {
              return <div key={item.id}>
                <img src={item.src} />
              </div>
            })}
          </div>
        </div>
        <div className=" md:w-[480px] md:h-[640px] order-1 md:order-2">
          <img className="h-full w-full hidden md:block object-contain"
            src="/images/image-hero-desktop.png"
            alt="Hero Desktop"
          />
          <img
            className="block md:hidden h-full w-full object-cover"
            src="/images/image-hero-mobile.png"
            alt="Hero Mobile"
          />
        </div>
      </section>
    </>
  );
}
