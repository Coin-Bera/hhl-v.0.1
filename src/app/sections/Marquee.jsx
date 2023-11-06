import React from "react";
import MagneticButton from "../components/MagneticButton";
import Image from "next/image";
import Link from "next/link";
import Bubble from "../components/Bubble";

const Marquee = () => {
    return (
        <section className="container relative flex items-center xl:py-[250px] lg:pt-[200px] lg:pb-[100px] sm:pt-[150px] overflow-x-hidden mx-auto" style={{ position: "relative" }}>
            <div className="flex gap-16 whitespace-nowrap mx-auto animate-marquee">
                {/*  */}
                <>
                    <Image
                        src="/assets/img/coinbase.svg"
                        alt="Image 1"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />
                    <Image
                        src="/assets/img/delphi.svg"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/okx.svg"
                        alt="Image 2"
                        width={100} // Set your desired width
                        height={100} // Set your desired height
                    />

                    <Image
                        src="/assets/img/polychain.svg"
                        alt="Image 2"
                        width={150} // Set your desired width
                        height={150} // Set your desired height
                    />

                    <Image
                        src="/assets/img/sequoia.svg"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/shima.svg"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/steelperlot.png"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={50} // Set your desired height
                    />

                    <Image
                        src="/assets/img/robo.svg"
                        alt="Image 2"
                        width={50} // Set your desired width
                        height={50} // Set your desired height
                    />
                    <Image
                        src="/assets/img/tribe.png"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={20} // Set your desired height
                    />
                </>
                <>
                    <Image
                        src="/assets/img/coinbase.svg"
                        alt="Image 1"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />
                    <Image
                        src="/assets/img/delphi.svg"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/okx.svg"
                        alt="Image 2"
                        width={100} // Set your desired width
                        height={100} // Set your desired height
                    />

                    <Image
                        src="/assets/img/polychain.svg"
                        alt="Image 2"
                        width={150} // Set your desired width
                        height={150} // Set your desired height
                    />

                    <Image
                        src="/assets/img/sequoia.svg"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/shima.svg"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/steelperlot.png"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={50} // Set your desired height
                    />

                    <Image
                        src="/assets/img/robo.svg"
                        alt="Image 2"
                        width={50} // Set your desired width
                        height={50} // Set your desired height
                    />
                    <Image
                        src="/assets/img/tribe.png"
                        alt="Image 2"
                        width={200} // Set your desired width
                        height={20} // Set your desired height
                    />
                </>
            </div>
        </section>
    );
};

export default Marquee;