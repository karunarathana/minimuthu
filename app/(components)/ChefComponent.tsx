'use client'

import Image from "next/image";
import chefImage from "../../public/chef 1.png";
import onion from "../../public/onion.png";
import leaf from "../../public/leaf1.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ChefComponentSimple() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative py-16 bg-white overflow-hidden">

      {/* Floating Onion */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[25px] left-[15px] z-0"
      >
        <Image
          src={onion}
          alt="Decorative onion"
          width={200}
          height={200}
          className="object-contain"
        />
      </motion.div>

      {/* Floating Leaf */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[25px] right-[15px] z-0"
      >
        <Image
          src={leaf}
          alt="Decorative leaf"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Chef Image */}
          <div className="md:w-1/2">
            <div className="relative">

              <motion.div
                initial={{ y: -120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={chefImage}
                  alt="Expert Chef"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </motion.div>

              {/* Decorative Border */}
              <div className="absolute -z-10 top-5 left-5 w-full h-full border-2 border-orange-200 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            className="md:w-1/2 space-y-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            {/* Heading */}
            <motion.div variants={item}>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Our Expert Chef
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Master of <span className="text-orange-500"> Culinary Arts</span>
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={item}
              className="text-gray-600 leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-3 pt-2"
            >
              <div>
                {["15+ Years Experience", "Michelin Star", "Italian Expert"].map((text, i) => (
                  <div key={i} className="flex items-center space-x-2 py-1">
                    <FaCheckCircle className="text-orange-500 w-4 h-4" />
                    <span className="text-gray-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div>
                {["Pastry Master", "Sommelier", "1000+ Dishes"].map((text, i) => (
                  <div key={i} className="flex items-center space-x-2 py-1">
                    <FaCheckCircle className="text-orange-500 w-4 h-4" />
                    <span className="text-gray-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="flex gap-2.5"
            >

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Book a Table
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-black hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Contact Us
              </motion.button>

            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}