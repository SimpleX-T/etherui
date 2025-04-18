"use client"

import { motion } from "framer-motion"
import CounterAnimation from "./counter-animation"

export default function StatsSection() {
  return (
    <section className="py-16 px-8 md:px-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join a community of millions.</h2>
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
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">ACTIVE ACCOUNTS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <CounterAnimation end={300} suffix="+" />
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">PROJECTS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col"
          >
            <CounterAnimation end={1000} suffix="+" />
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">TOPICS</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
