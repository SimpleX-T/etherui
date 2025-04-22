"use client";
import { companies } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-8 md:px-16 overflow-hidden bg-black text-white">
      <div className="absolute -top-20 -left-10 bg-[#6843EC] blur-[400px] w-[457px] h-[457px] rounded-full" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-7xl lg:text-6xl font-semibold mb-6">
              Harnessing Artificial Intelligence Tools for Naturally Image
              Generator
            </h1>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl">🔥</span>
              <span className="text-2xl">😊</span>
              <span className="text-2xl">👍</span>
            </div>
          </motion.div>

          {/* Right column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base"
          >
            <p className="mb-4">
              In the realm of creativity, technology has become a powerful ally
              for artists, writers, designers, and creators of all kinds.
              Artificially intelligent (AI) tools have emerged as valuable
              companions, assisting naturally creative humans in their creative
              processes.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[400px]">
            <div className="col-span-6 relative lg:col-span-5 row-span-2 bg-black rounded-3xl overflow-hidden">
              <div className="bottom-right-mask h-full w-full">
                <img
                  src="/images/masked_image.png"
                  alt="AI Generator"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-4 m z-10">
                <p className="text-white text-xl font-semibold">AI Generator</p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 row-span-1 bg-gradient-to-b from-[#D2FF3A] to-transparent rounded-3xl p-6 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-black">300+</h3>
              <p className="text-black text-2xl font-medium">Projects</p>
            </div>

            <div className="col-span-6 lg:col-span-4 row-span-1 bg-[#6843EC]/80 rounded-3xl overflow-hidden">
              <div className="flex items-center h-full relative">
                <div>
                  <img src="/icons/tee.svg" alt="shape" />
                </div>
                <div>
                  <img src="/icons/triangle.svg" alt="shape" />
                </div>
                <div>
                  <img src="/icons/circle.svg" alt="shape" />
                </div>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-4 row-span-1 bg-[#6843EC] rounded-3xl p-6 lg:w-[calc(100%_+_50px)] lg:-translate-x-40">
              <h2 className="text-white font-bold text-xl">
                We have the best AI image generator
              </h2>

              <div className="flex items-center gap-2 w-fit group mt-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src="/images/hero_pfp1.png"
                      alt="pfp"
                      className="w-full h-full object-cover group-hover:grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -translate-x-4 group-hover:-translate-x-1 transition-transform duration-300 ease-out cursor-pointer">
                    <img
                      src="/images/hero_pfp2.png"
                      alt="pfp"
                      className="w-full h-full object-cover group-hover:grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -translate-x-8 group-hover:-translate-x-2 transition-transform duration-300 ease-out cursor-pointer">
                    <img
                      src="/images/hero_pfp3.png"
                      alt="pfp"
                      className="w-full h-full object-cover group-hover:grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -translate-x-12 group-hover:-translate-x-3 transition-transform duration-300 ease-out cursor-pointer">
                    <img
                      src="/images/hero_pfp4.png"
                      alt="pfp"
                      className="w-full h-full object-cover group-hover:grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>

                <p className="text-lg text-white/80 font-semibold leading-tight -translate-x-12 group-hover:-translate-x-3 transition-transform duration-300 ease-out">
                  We've got everything you're looking for you
                </p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 row-span-1 flex items-center justify-center lg:w-[calc(100%_+_100px)] lg:-translate-x-26 lg:h-[175px]">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#D2FF3A] w-full h-full cursor-pointer text-black font-medium rounded-lg md:rounded-3xl flex items-center justify-center text-xl py-4"
              >
                Try Free <ArrowUpRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-4">
            <h3 className="uppercase text-[#6843EC] text-lg font-semibold text-center">
              Powering tools and integrations from companies all around the
              world
            </h3>
          </div>
          <div className="flex gap-4 items-center justify-around flex-wrap w-full">
            {companies.map((company, key) => (
              <div
                key={key}
                className="flex items-center justify-center p-4 min-w-[100px]"
              >
                <img src={company.icon} alt={company.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
