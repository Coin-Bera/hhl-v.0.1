import HomeBanner from "./sections/HomeBanner"
import HomeContact from "./sections/HomeContact"
import HomeFAQpage from "./sections/HomeFAQpage"
import OurExpertise from "./sections/OurExpertise"
import AboutHowWeWork from "./sections/AboutHowWeWork"
import Marquee from "./sections/Marquee"

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Marquee />
      <AboutHowWeWork />
      <OurExpertise />
      <HomeFAQpage />
      <HomeContact />
    </>
  )
}