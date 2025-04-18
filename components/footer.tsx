"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-16 px-8 md:px-16 border-t text-white border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="col-span-1 md:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-4">Ether</h2>
          <p className="text-white mb-6">Managed by Artificial Intelligence</p>
          <div className="flex text-white space-x-4">
            <SocialIcon icon={<Twitter className="h-5 w-5 text-white" />} />
            <SocialIcon icon={<Facebook className="h-5 w-5 text-white" />} />
            <SocialIcon icon={<Instagram className="h-5 w-5 yext-white" />} />
            <SocialIcon icon={<Youtube className="h-5 w-5 text-while" />} />
            <SocialIcon icon={<Linkedin className="h-5 w-5 text-white" />} />
            <SocialIcon icon={<Github className="h-5 w-5 text-white" />} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-4">ETHER</h3>
          <ul className="space-y-2">
            <FooterLink href="#" label="Create" />
            <FooterLink href="#" label="Generator" />
            <FooterLink href="#" label="Careers" />
            <FooterLink href="#" label="Disclaimer" />
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-4">GET CONNECTED</h3>
          <ul className="space-y-2">
            <FooterLink href="#" label="Services" />
            <FooterLink href="#" label="Blog" />
            <FooterLink href="#" label="Newsletter" />
          </ul>
        </motion.div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-8 h-8 rounded-full bg-secondary-gray flex items-center justify-center"
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
      <Link href={href} className="text-white transition-colors">
        {label}
      </Link>
    </motion.li>
  )
}
