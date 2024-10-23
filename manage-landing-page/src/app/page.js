'use client'
import Button from "./components/Button";
import Card from "./components/Card";
import { features } from "./constants/config";
import { testimonials } from "./constants/config";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper/modules';

export default function Home() {

  return (
    <>
      <section className="container mx-auto px-5 max-w-[1140px] flex flex-col w-full md:flex-row mt-10 lg:mt-24 sm:items-center sm:justify-between">
        <div className="w-full h-full flex items-center justify-center md:order-2 order-1">
          <img src="illustration-intro.svg" />
        </div>
        <div className="flex flex-col md:order-1 order-2 max-w-lg  items-center md:items-start gap-5  ">
          <h1 className=" text-4xl lg:text-5xl text-center  md:text-start font-bold w-full  ">Bring everyone together to build better products.</h1>
          <p className="w-full  max-w-sm text-center md:text-left ">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <div className="md:text-left mt-2  text-center">
            <Button name="Get Started" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 max-w-[1140px] flex flex-col md:flex-row mt-20 items-center sm:items-start justify-between">
        <div className="text-center mx-auto lg:mx-0 md:text-left max-w-md mb-10">
          <h2 className="text-3xl mb-5 w-full">What&lsquo;s different about Manage?</h2>
          <p className="py-5 md:w-[370px]">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>
        <div>
          {
            features.map((item) => {
              return <div key={item.id} className="flex flex-col md:max-w-[520px] ">
                <div className="flex gap-2 md:gap-5 mb-3 items-center  bg-neutral-paleRed  md:bg-transparent  rounded-full">
                  <span className="flex items-center justify-center rounded-full px-6 py-3 h-10 bg-primary-red text-white font-bold ">{item.id}</span>
                  <h4 className="  text-sm md:text-base">{item.title}</h4>
                </div>
                <p className="mb-12 md:pl-[90px] ">{item.description}</p>
              </div>
            })
          }
        </div>
      </section>
      <section className="mt-20 px-5 w-full container mx-auto text-center">
        <h2 className="text-3xl mb-5 w-full text-center">What they’ve said</h2>
        <Swiper
          className=" custom-swiper  "
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}

          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} >
              <div className="flex justify-center mb-10 items-center h-full w-full">
                <Card
                  name={testimonial.name}
                  image={testimonial.image}
                  quote={testimonial.quote}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button name="Get Started" className={`mt-10`} />
      </section>
      <section className="bg-primary-red mt-[150px] w-full  simplifyBackground"  >

        <div className="container  max-w-[1140px] mx-auto  ">
          <div className="flex flex-col lg:flex-row gap-5 text-center  justify-between py-[60px] items-center">
            <h4 className="text-white font-medium text-4xl px-10 lg:px-0 text-center">Simplify how your team works today.</h4>
            <Button name="Get Started" className={`!bg-white !text-[#F3603C] hover:!bg-[#FFF0EC] hover:!text-[#FF8F70] `} />
          </div>
        </div>
      </section>
    </>
  );
}
