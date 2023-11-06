"use client"

import React, { useEffect, useRef } from 'react'
import Bubble from "../components/Bubble"
import { Power3, gsap } from "gsap";
import GsapAnimation from '../components/Gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Style
import "../scss/sections/AboutHowWeWork.scss"

const AboutHowWeWork = () => {
    const stickySection = useRef()
    const stickyData = [
        {
            title: "2.0 Billion+ in Enterprise Value Provided",
            content: "Our focus on cutting-edge technologies, creative solutions, and strategic partnerships has empowered organizations worldwide to achieve their business objectives, enhancing their competitiveness and driving sustainable growth."
        },
        {
            title: "50+ Employees WorldWide",
            content: "With a dedicated team of 50+ employees spread across the globe, we've built a strong network of expertise and talent. Our worldwide presence enables us to deliver exceptional services and solutions to clients from diverse backgrounds and locations."
        },
        {
            title: "$100M+ Engineering Capital",
            content: "With an engineering capital of over $100 million, our commitment to innovation and technical excellence is evident. We've invested significantly in resources, research, and development, allowing us to stay at the forefront of cutting-edge engineering solutions."
        },
    ]

    const initAnime = () => {
        const timeline = gsap.timeline()
        const animation1 = gsap.to(stickySection.current, { clipPath: "circle(110% at 50% 600px)", duration: 1, ease: Power3.easeInOut })
        const animation2 = gsap.from(stickySection?.current?.querySelector(".container"), { opacity: 0, duration: 1, ease: Power3.easeInOut })
        timeline.add(animation1, 0);
        timeline.add(animation2, 0.3)
        timeline.pause()

        gsap.to(stickySection.current, {
            scrollTrigger: {
                trigger: stickySection.current,
                scrub: true,
                start: "160px top",
                end: `+=500`,
                toggleClass: "active",
                ease: Power3,
                onEnter: () => {
                    timeline.play()
                },
                onLeaveBack: () => {
                    timeline.reverse()
                }
            }
        })
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)", () => {
                initAnime()
            });
        }, stickySection);
        return () => ctx.revert()
    }, [])

    return (
        <section ref={stickySection} className="sticky-section relative z-[5] bg-white pt-[1000px] xl:pt-[800px] lg:py-[120px] md:py-[90px] sm:py-[50px]" style={{ "--progress": 0 }}>
            <div className="container relative">
                <div className="row justify-between gap-y-[70px]">
                    <div className="col-lg-5">
                        <div className="sticky top-1/2 -translate-y-1/2 lg:translate-y-0">
                            <Bubble className="md:!opacity-0" style={{ top: -150, left: -250, opacity: 0.7, "--bubble-bg": "linear-gradient(#00FF57, #00EC50, #B2FAFF)" }} />
                            <div className="flex items-start relative z-10">
                                <GsapAnimation animation={{ opacity: 1, duration: 1, ease: Power3.easeInOut }} className="process-anim mr-[15px] mt-[15px] sm:mt-[10px] opacity-0"><span></span></GsapAnimation>
                                <h2 className="title heading-1 text-black font-semibold md:text-[50px] sm:text-[35px]">Let's Talk Shop</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 z-10">
                        {
                            stickyData?.map((item, i) => {
                                return (
                                    <div key={i} className={`wrapper${i === stickyData.length - 1 ? "" : " mb-[400px] xl:mb-[250px] lg:mb-[100px] md:mb-[50px]"}`}>
                                        <h3 className="sticky-content-title text-black font-semibold mb-[15px]">{item.title}</h3>
                                        <p className="w-[90%] lg:w-full">{item.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHowWeWork