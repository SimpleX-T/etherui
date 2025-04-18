"use client";

import { motion } from "framer-motion";
import { Youtube, Podcast } from "lucide-react";
import CounterAnimation from "./counter-animation";

export default function FeaturesSection() {
  // const cardVariants = {
  //   hidden: { opacity: 0, x: (index: number) => (index === 0 ? -20 : 20) },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.7, ease: "easeOut" },
  //   },
  // };

  // Button animation variants
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 relative bg-[url('/images/gradient_bg.jpeg')]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#19161C] rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-800"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Automated Image Synthesis and Design
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
            With AI-powered image generation, designers and creatives can
            streamline their workflows and unlock new levels of efficiency.
          </p>
          <div className="flex space-x-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Watch on YouTube"
            >
              <Youtube className="h-5 w-5 text-red-500" />
              <span>YOUTUBE</span>
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Listen to Podcast"
            >
              <Podcast className="h-5 w-5 text-purple-500" />
              <span>PODCAST</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={cardVariants}
          className="bg-[#19161C] rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-800"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Create stunning visual in seconds
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
            Generating innovative ideas is a crucial aspect of any creative
            endeavor. AI tools can help spark inspiration by analyzing vast
            amounts of data.
          </p>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Write Prompt To Generate Image"
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-lime"
              aria-label="Image generation prompt"
            />
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-secondary-lime text-primary-black font-semibold py-2 px-4 rounded-lg text-sm hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-secondary-lime"
              aria-label="Generate image"
            >
              Generate
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join a community of millions.
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <CounterAnimation end={10.2} suffix="M+" />
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">
              ACTIVE ACCOUNTS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <CounterAnimation end={300} suffix="+" />
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">
              PROJECTS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col"
          >
            <CounterAnimation end={1000} suffix="+" />
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">
              TOPICS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
