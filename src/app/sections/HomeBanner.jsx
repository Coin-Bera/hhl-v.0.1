import React from 'react';
import MagneticButton from '../components/MagneticButton';
import Image from 'next/image';
import Link from 'next/link';
import Bubble from '../components/Bubble';

const HomeBanner = () => {
  return (
    <>
      {/* HomeBanner */}
      <section
        className="py-[320px] relative flex items-center xl:py-[250px] lg:pt-[200px] lg:pb-[100px] sm:pt-[150px]"
        style={{ position: 'relative' }}
      >
        {/* Sticky Background Image */}
        <div
          className="absolute inset-0 z-[-1] bg-black opacity-20"
          style={{
            background: 'url("/assets/img/banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
          }}
        />

        <Bubble
          className="opacity-50"
          style={{ top: 0, left: 'auto', right: 0, '--bubble-bg': 'linear-gradient(#00FF57, #013C15)' }}
        />
        <Bubble
          className="opacity-50"
          style={{ top: 300, left: -150, '--bubble-bg': 'linear-gradient(#00FF57, #013C15)' }}
        />
        <div className="row justify-center relative z-0 mx-0 w-full">
          <div className="col-xl-6 col-lg-8">
            <div className="text-center relative">
              <h1 className="heading-1 font-bold text-white mb-[20px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[12px]">
                Habibi House Labs
              </h1>
              <p className="text-[18px] w-full mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full">
                We help crypto projects scam their users <br /> We love what we do.
              </p>
              <MagneticButton buttonClass="bg-[#00B25C] py-[20px] px-[55px] rounded-[36px]">
                <Link href="/contact" className="text font-poppins">
                  Contact Us
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
