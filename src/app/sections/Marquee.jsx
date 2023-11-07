import React from "react";
import Image from "next/image";

const Marquee = () => {
    return (
        <section className="container relative flex items-center xl:py-[250px] lg:pt-[200px] lg:pb-[100px] sm:pt-[150px] overflow-x-hidden mx-auto" style={{ position: "relative" }}>
            <div className="flex gap-16 whitespace-nowrap mx-auto animate-marquee">
                <>
                    <Image
                        src="/assets/img/coinbase.svg"
                        alt="Coinbase"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />
                    <Image
                        src="/assets/img/delphi.svg"
                        alt="Delphi Digital"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/okx.svg"
                        alt="OKX Ventures"
                        width={100} // Set your desired width
                        height={100} // Set your desired height
                    />

                    <Image
                        src="/assets/img/polychain.svg"
                        alt="Polychain Capital"
                        width={150} // Set your desired width
                        height={150} // Set your desired height
                    />

                    <Image
                        src="/assets/img/sequoia.svg"
                        alt="Sequoia Capital China"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/shima.svg"
                        alt="Shima Capital"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/steelperlot.png"
                        alt="Steel Perlot"
                        width={200} // Set your desired width
                        height={50} // Set your desired height
                    />

                    <Image
                        src="/assets/img/robo.svg"
                        alt="Robo Ventures"
                        width={50} // Set your desired width
                        height={50} // Set your desired height
                    />
                    <Image
                        src="/assets/img/tribe.svg"
                        alt="Tribe Capital"
                        width={300} // Set your desired width
                        height={100} // Set your desired height
                    />
                </>
                <>
                    <Image
                        src="/assets/img/coinbase.svg"
                        alt="Coinbase"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />
                    <Image
                        src="/assets/img/delphi.svg"
                        alt="Delphi Digital"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/okx.svg"
                        alt="OKX Ventures"
                        width={100} // Set your desired width
                        height={100} // Set your desired height
                    />

                    <Image
                        src="/assets/img/polychain.svg"
                        alt="Polychain Capital"
                        width={150} // Set your desired width
                        height={150} // Set your desired height
                    />

                    <Image
                        src="/assets/img/sequoia.svg"
                        alt="Sequence Capital China"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/shima.svg"
                        alt="Shima Capital"
                        width={200} // Set your desired width
                        height={200} // Set your desired height
                    />

                    <Image
                        src="/assets/img/steelperlot.png"
                        alt="Steel Perlot"
                        width={200} // Set your desired width
                        height={50} // Set your desired height
                    />

                    <Image
                        src="/assets/img/robo.svg"
                        alt="Robo Ventures"
                        width={50} // Set your desired width
                        height={50} // Set your desired height
                    />
                    <Image
                        src="/assets/img/tribe.svg"
                        alt="Tribe Capital"
                        width={300} // Set your desired width
                        height={100} // Set your desired height
                    />
                </>
            </div>
        </section>
    );
};

export default Marquee;