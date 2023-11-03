"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// style
import 'swiper/css';

const TeamData = [
  {
    img: "/assets/img/20.png",
    name: "Mohd Bin-Sal",
    designation: "Head of finance",
  },
  {
    img: "/assets/img/10.png",
    name: "Prince Ahmed",
    designation: "CEO",
  },
  {
    img: "/assets/img/24-1.png",
    name: "Sheikh Mohd.",
    designation: "Head of Operations",
  },
];

const AboutOurTeam = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)");
    if (isMobile.matches) {
      setIsMobile(true)
    }

    window.matchMedia("(max-width: 767px)").onchange = (e) => {
      if (e.matches) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }, [])

  return (
    <section>
      <div className="container">
        <div className="row justify-center mb-[90px]">
          <div className="col-xl-6 col-lg-8 col-md-10 text-center">
            <h2 className="mb-[30px] text-white font-semibold">Our Team</h2>
            <p> Our team is dedicated to creating solutions that help our users and make the world a better place.</p>
          </div>
        </div>

        {
          isMobile ? (
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={50}
              autoplay={{ disableOnInteraction: true, delay: 2000 }}
              breakpoints={{
                768: {
                  autoplay: false
                }
              }}
            >
              {TeamData?.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="flex">
                    <Team item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="row justify-center gap-y-[30px]">
              {TeamData?.map((item, i) => {
                return (
                  <Team key={i} item={item} />
                )
              })}
            </div>
          )
        }
      </div>
    </section>
  );
};

export default AboutOurTeam;

const Team = ({ item }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-12 sm:mx-auto">
      <div className="text-center h-full">
        <div className="relative mb-[25px] bg-darkgray w-full h-full rounded-[25px] flex items-center px-[15px] py-[15px]">
          <div className="img-wrapper mr-[15px] bg-[#383838] relative rounded-[25px] w-[100px] h-[100px] overflow-hidden">
            <Image src={item.img} alt={item.name} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className="text-left">
            <h3 className="text-[20px] leading-none text-white font-medium">{item.name}</h3>
            <p>{item.designation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
