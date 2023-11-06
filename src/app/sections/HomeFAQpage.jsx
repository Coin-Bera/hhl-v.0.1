"use client"
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import GsapAnimation from '../components/Gsap';
import { Power3 } from 'gsap';

const accordionData = [
  {
    title: "What is a web3 engineering company, and what do they do?",
    description: "A web3 engineering company is a specialized firm that focuses on developing and maintaining web3 solutions and blockchain-based applications. They play a pivotal role in creating decentralized platforms, smart contracts, and decentralized applications (dApps) to enable peer-to-peer interactions, financial services, and more in the blockchain ecosystem."
  },
  {
    title: "How can a web3 engineering company benefit my business?",
    description: "Web3 engineering companies can provide your business with expertise in blockchain technology, enabling you to harness the benefits of decentralization, transparency, and security. They can help you build and deploy blockchain-based solutions that enhance trust, reduce fraud, and streamline processes, opening up new opportunities and revenue streams."
  },
  {
    title: "What technologies and programming languages do web3 engineering companies specialize in?",
    description: "Web3 engineering companies are proficient in a variety of blockchain technologies, such as Ethereum, Solana, Polkadot, and Binance Smart Chain. They often use programming languages like Solidity for Ethereum-based projects and Rust for platforms like Solana. These companies are well-versed in blockchain development tools and frameworks."
  },
  {
    title: "How do web3 engineering companies ensure the security of blockchain solutions?",
    description: "Security is a top priority for web3 engineering companies. They employ best practices in smart contract development, conduct extensive code audits, and use advanced security tools to identify vulnerabilities. Additionally, they often implement decentralized identity, encryption, and consensus mechanisms to enhance the security of blockchain applications, making them robust and trustworthy."
  }
]

const HomeFAQpage = () => (
  <section className="relative bg-white">
    <GsapAnimation
      as='div'
      animation={{ clipPath: "inset(0 100% 0 0)", duration: 1, ease: Power3.easeInOut }}
      className="bg-[--body-bg] absolute top-0 left-0 w-full h-full [clip-path:inset(0_0_0_0)]"
    >
    </GsapAnimation>
    <div className="container">
      <div className="row justify-center">
        <GsapAnimation className="col-xl-6 col-lg-7 opacity-0" animation={{ opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }}>
          <h2 className="text-darkgray text-center font-semibold leading-[1.5] mb-[70px]">Frequently Asked Questions</h2>
        </GsapAnimation>
        <GsapAnimation className="col-lg-7 opacity-0" animation={{ opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }}>
          <Accordion.Root
            className="w-full"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            {
              accordionData?.map((item, i) => {
                return (
                  <Accordion.Item className="mt-px overflow-hidden first:mt-0 mb-[35px] last:mb-0" key={i} value={i + 1}>
                    <Accordion.Trigger className="text-left text-darkgray text-[20px] leading-[30px] font-poppins font-semibold pb-[15px] border-b border-solid border-[#828282] w-full md:text-[18px]">{item.title}</Accordion.Trigger>
                    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      <div className="pt-[15px]">{item.description}</div></Accordion.Content>
                  </Accordion.Item>
                )
              })
            }
          </Accordion.Root>
        </GsapAnimation>
      </div>
    </div>
  </section>
);

export default HomeFAQpage;