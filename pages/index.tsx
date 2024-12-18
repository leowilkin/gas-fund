import { EasterEgg } from "@/components/EasterEgg";
import { Explanation } from "@/components/Explanation";
import Footer from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { Hero } from "@/components/Hero";
import { International } from "@/components/International";
import { Nav } from "@/components/Nav";
import { TrainTrack } from "@/components/TrainTrack";
import { TrainsAndBuses } from "@/components/TrainsAndBuses";
import Works from "@/components/Works";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { scrollY } = useScroll();
  return (
    <>
      <Head>
        <title>Gas Fund</title>
      </Head>
      <div className="overflow-x-hidden">
        <Nav />
        <Hero />
        <Explanation />

        <img src="/roadbanner.svg" className="w-full my-[5vh]" />
        <International />
        <img src="/roadbanner.svg" className="w-full my-[5vh]" />
        <Works />
        <div className="mt-2">
          <TrainTrack />
        </div>
        <TrainsAndBuses />
        <div className="border-t-[3px] border-gray-100 mt-8 pt-4 border-dotted">
          <GetStarted />
        </div>
        <Footer />
        <EasterEgg />
      </div>
    </>
  );
}
