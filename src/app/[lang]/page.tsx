"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  slideIn,
  rotateAnimation,
} from "./components/animations";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A2A1A] relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative z-10 h-[100vh] max-h-[800px] min-h-[600px]"
        // initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Hero Background Image */}
        <motion.div
          className="absolute inset-0 z-0 rtl:rotate-180 rtl:scale-y-[-1]"
          variants={fadeIn("up", 0.2)}
        >
          <Image
            src="/images/Full Header Screen 2.PNG"
            alt="Pool Championship"
            width={1920}
            height={1080}
            className="w-full h-[100vh] object-cover"
            priority
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A2A1A]/40 to-[#0A2A1A]/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          ></motion.div>

          {/* Triangular decoration */}
          <motion.div
            className="absolute bottom-0 right-0 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Image
              src="/images/Balls Pattern.PNG"
              alt="Decoration"
              width={150}
              height={150}
              className=""
            />
          </motion.div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="container mx-auto h-full px-4 flex items-center justify-end relative z-10"
          variants={staggerContainer(0.1, 0.2)}
        >
          <motion.div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div className="mb-6" variants={fadeIn("right", 0.4)}>
              <h1 className="text-4xl lg:text-5xl">
                <motion.span
                  className="text-white block font-light tracking-wide"
                  variants={textVariant(0.6)}
                >
                  Experience The Best
                </motion.span>
                <motion.span
                  className="text-[#BF9447] text-5xl lg:text-7xl block font-bold tracking-wide"
                  variants={textVariant(0.8)}
                >
                  POOL GAME EVER.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-white text-lg font-light tracking-wide"
              variants={fadeIn("up", 1)}
            >
              Taking Place in Jeddah, Saudi Arabia
              <br />3 - 8 June 2024
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* A Game of Skill and Speed Section */}
      <motion.section
        className="relative pt-0 pb-0 z-10 min-h-[700px] flex items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Triangular decoration */}
        <motion.div
          className="absolute bottom-0 left-0 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Image
            src="/images/Balls Pattern 2.PNG"
            alt="Decoration"
            width={150}
            height={150}
            className=""
          />
        </motion.div>
        {/* Primary color overlay for background */}
        <motion.div
          className="absolute inset-0 bg-[#0A2A1A] opacity-80 z-0"
          variants={fadeIn("up", 0.1)}
        ></motion.div>

        {/* Saudi flag in background with primary color overlay */}
        <motion.div
          className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80%] h-[80%] opacity-30"
          variants={fadeIn("left", 0.3)}
        >
          <Image
            src="/images/Saudi Flag.PNG"
            alt="Saudi Flag"
            width={800}
            height={800}
            className="object-contain rtl:transform rtl:scale-x-[-1]"
          />
        </motion.div>

        {/* Player image */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 rtl:right-auto rtl:left-0 -translate-y-28 w-[50%]"
          variants={slideIn("right", "tween", 0.4, 0.8)}
        >
          <Image
            src="/images/Mask Group 10.PNG"
            alt="Pool Player"
            width={800}
            height={800}
            className="object-contain rtl:transform rtl:scale-x-[-1]"
            priority
          />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 relative z-20"
          variants={staggerContainer(0.1, 0.2)}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8 leading-16"
              variants={fadeIn("left", 0.5)}
            >
              <div className="p-6 rounded-lg">
                <motion.h2
                  className="text-[#BF9447] text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wide uppercase"
                  variants={textVariant(0.6)}
                >
                  A GAME OF
                  <br />
                  SKILL AND
                  <br />
                  SPEED
                </motion.h2>
                <motion.p
                  className="text-white text-base font-medium leading-relaxed tracking-wide uppercase"
                  variants={fadeIn("up", 0.8)}
                >
                  GET YOUR CHANCE TO WATCH
                  <br />
                  THESE TALENTED PLAYERS.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Matches Section */}
      <motion.section
        className="relative py-16 z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Background decorative elements */}
        <motion.div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute bottom-[20%] left-0 rtl:left-auto rtl:right-0 w-[150px] h-[150px] opacity-10"
            variants={rotateAnimation}
            animate="animate"
          >
            <Image
              src="/images/Balls Pattern 2.PNG"
              alt=""
              width={150}
              height={150}
              className="object-contain rtl:transform rtl:scale-x-[-1]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="container mx-auto px-4 relative"
          variants={staggerContainer()}
        >
          <motion.h3
            className="text-white text-3xl font-bold mb-8 ml-4"
            variants={fadeIn("left", 0.2)}
          >
            Live
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            variants={staggerContainer(0.1)}
          >
            {/* Live Match Card 1 */}
            <motion.div
              className="bg-white rounded-none p-6 shadow-lg"
              variants={fadeIn("up", 0.3)}
              whileHover={{
                scale: 1.01,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.PNG"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    Player Name
                  </span>
                </div>

                {/* VS and Live indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-[#BF9447] flex items-center justify-center mb-3 w-10 h-10">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <span className="bg-red-700 text-white px-6 py-1 rounded-full text-xs font-semibold">
                    Live
                  </span>
                </div>

                {/* Player 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player 2 Photo.PNG"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    Player Name
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Live Match Card 2 */}
            <motion.div
              className="bg-white rounded-none p-6 shadow-lg"
              variants={fadeIn("up", 0.4)}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.PNG"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    Player Name
                  </span>
                </div>

                {/* VS and Live indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-[#BF9447] flex items-center justify-center mb-3 w-10 h-10">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <span className="bg-red-700 text-white px-6 py-1 rounded-full text-xs font-semibold">
                    Live
                  </span>
                </div>

                {/* Player 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player 2 Photo.PNG"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    Player Name
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h3
            className="text-white text-3xl font-bold mb-8 ml-4"
            variants={fadeIn("left", 0.5)}
          >
            Upcoming
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1)}
          >
            {/* Upcoming Match Card 1 */}
            <motion.div
              className="bg-[#0D3520] border border-[#1C3C2C] rounded-none p-6 shadow-lg"
              variants={fadeIn("up", 0.6)}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.PNG"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    Player Name
                  </span>
                </div>

                {/* VS and Time indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-[#BF9447] flex items-center justify-center mb-3 w-10 h-10">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <span className="bg-gray-200/20 text-white px-6 py-1 rounded-full text-xs font-medium">
                    7:00 PM
                  </span>
                </div>

                {/* Player 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player 2 Photo.PNG"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    Player Name
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Match Card 2 */}
            <motion.div
              className="bg-[#0D3520] border border-[#1C3C2C] rounded-none p-6 shadow-lg"
              variants={fadeIn("up", 0.7)}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.PNG"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    Player Name
                  </span>
                </div>

                {/* VS and Time indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-[#BF9447] flex items-center justify-center mb-3 w-10 h-10">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <span className="bg-gray-200/20 text-white px-6 py-1 rounded-full text-xs font-medium">
                    7:00 PM
                  </span>
                </div>

                {/* Player 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player 2 Photo.PNG"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    Player Name
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Top Players Section */}
      <motion.section
        className="py-16 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Background WPC2024 image */}
        <div className="absolute inset-0 bottom-0 z-0 opacity-20">
          <Image
            src="/images/WPC2024-1080x1080.PNG"
            alt="WPC 2024 Background"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={staggerContainer()}
        >
          <motion.div
            className="flex items-center justify-between mb-10"
            variants={fadeIn("down", 0.1)}
          >
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-white text-3xl font-bold mr-4">
                  Top Players
                </h3>
              </motion.div>
              <motion.div
                className="h-[1px] w-20 bg-[#1C3C2C]"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              ></motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/players"
                className="see-all-button bg-[#BF9447] text-white px-4 py-2 text-sm font-medium rounded-full"
              >
                See All
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10"
            variants={staggerContainer(0.1)}
          >
            {/* Player 1 */}
            <motion.div
              className="player-card p-4 rounded-none"
              variants={fadeIn("up", 0.2)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Top Player Full.PNG"
                alt="Top Player"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Player 2 */}
            <motion.div
              className="player-card p-4 rounded-none"
              variants={fadeIn("up", 0.3)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Top Playe Full.PNG"
                alt="Top Player"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Player 3 */}
            <motion.div
              className="player-card p-4 rounded-none"
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Top Playe Full-1.PNG"
                alt="Top Player"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Popular News Section */}
      <motion.section
        className="py-16 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Background Sparks image */}
        <div className="absolute inset-0 bottom-0 z-0 opacity-20">
          <Image
            src="/images/Sparks.PNG"
            alt="Sparks Background"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={staggerContainer()}
        >
          <motion.div
            className="flex items-center justify-between mb-10"
            variants={fadeIn("down", 0.1)}
          >
            <motion.h2
              className="text-white text-3xl font-bold"
              variants={textVariant(0.2)}
            >
              Popular News
            </motion.h2>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/news"
                className="bg-[#BF9447] hover:bg-[#C9A633] transition-colors duration-300 text-white font-medium px-5 py-3 rounded-full text-sm"
              >
                See More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-8"
            variants={staggerContainer(0.1)}
          >
            {/* Main News - Left Side */}
            <motion.div
              className="w-full lg:w-7/12"
              variants={fadeIn("right", 0.3)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <Image
                    src="/images/Mask group-1.PNG"
                    alt="News"
                    width={800}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#0A2A1A] text-2xl font-bold mb-2">
                    Headline May Be Written Here.
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Details Here Details Here Details Here Details Here Details
                    Here Details Here Details Here
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">12-5-2024</span>
                    <Link
                      href="/news/1"
                      className="bg-[#0A2A1A] hover:bg-[#454545] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video News - Right Side */}
            <motion.div
              className="w-full lg:w-5/12 flex flex-col gap-6 h-[460px]"
              variants={fadeIn("left", 0.3)}
            >
              {/* Video 1 */}
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg flex"
                variants={fadeIn("left", 0.4)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="w-1/2 relative">
                  <Image
                    src="/images/Mask group-2.PNG"
                    alt="Video"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-between">
                  <h3 className="text-[#0A2A1A] font-bold">
                    Video Title May Be Written Here.
                  </h3>
                  <div className="text-gray-500 text-sm">12-5-2024</div>
                </div>
              </motion.div>

              {/* Video 2 */}
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg flex"
                variants={fadeIn("left", 0.5)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="w-1/2 relative">
                  <Image
                    src="/images/Mask group-2.PNG"
                    alt="Video"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-between">
                  <h3 className="text-[#0A2A1A] font-bold">
                    Video Title May Be Written Here.
                  </h3>
                  <div className="text-gray-500 text-sm">12-5-2024</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer()}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative"
            variants={fadeIn("up", 0.1)}
          >
            <motion.div
              className="w-full mb-8 lg:mb-0 z-10"
              variants={fadeIn("right", 0.5)}
            >
              <motion.h2
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-wide uppercase"
                variants={textVariant(0.6)}
              >
                ABOUT
              </motion.h2>
              <motion.p
                className="text-white text-sm md:text-base mb-6 md:mb-8 leading-relaxed"
                variants={fadeIn("up", 0.8)}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. nisl ut aliquip ex ea commodo
                consequat. nisl ut aliquip ex ea commodo consequat. nisl ut
                aliquip ex ea commodo consequat.
              </motion.p>
              <motion.div variants={fadeIn("up", 1)}>
                <Link
                  href="/about"
                  className="inline-block bg-[#BF9447] text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[#A37E3B] transition-colors duration-300"
                >
                  Read More
                </Link>
              </motion.div>
            </motion.div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              {/* Circle background */}
              <motion.div
                className="absolute ltr:right-0 rtl:left-0 top-4 z-0 w-[80%] md:w-auto hidden md:block"
                variants={fadeIn("left", 0.3)}
                animate={{
                  rotate: [0, 3, 0, -3, 0],
                  transition: {
                    duration: 0.2,
                    ease: "linear",
                  },
                }}
              >
                <Image
                  src="/images/Mask Group 8.PNG"
                  alt="Circle Background"
                  width={500}
                  height={500}
                  className="object"
                />
              </motion.div>

              {/* Billiard table image */}
              <motion.div
                className="absolute ltr:right-0 rtl:left-0 top-0 z-10 w-full md:w-auto flex justify-center md:block rtl:transform rtl:scale-x-[-1]"
                variants={fadeIn("left", 0.5)}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/58878.PNG"
                  alt="Pool Table"
                  width={400}
                  height={300}
                  className=""
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-20 relative z-10 bg-[#0A2A1A]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer()}
        >
          <motion.h2
            className="text-white text-3xl font-bold mb-10 ml-4"
            variants={textVariant(0.1)}
          >
            Gallery
          </motion.h2>

          {/* Desktop Gallery Layout - Hidden on mobile */}
          <div className="relative hidden md:block">
            {/* Restaurant image (top right) */}
            <motion.div
              className="absolute top-0 right-[18rem] w-[38%] z-20"
              variants={fadeIn("left", 0.2)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Mask group-5.PNG"
                alt="Restaurant"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Stadium image (bottom right) */}
            <motion.div
              className="absolute top-[200px] right-[5rem] w-[30%] z-20"
              variants={fadeIn("up", 0.3)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Mask group-7.PNG"
                alt="Stadium"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Event image (large triangle - left) */}
            <motion.div
              className="absolute top-[50px] left-[14rem] w-[60%] z-10"
              variants={fadeIn("right", 0.4)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Mask group-4.PNG"
                alt="Event"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Championship image (bottom) */}
            <motion.div
              className="absolute bottom-[-13rem] right-[20rem] w-[28%] z-30"
              variants={fadeIn("up", 0.5)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/images/Mask group-6.PNG"
                alt="Pool Championship"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Spacer div to maintain section height */}
            <div className="h-[650px]"></div>
          </div>

          {/* Mobile Gallery Layout - Shown only on mobile */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                variants={fadeIn("up", 0.2)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Image
                  src="/images/Mask group-4.PNG"
                  alt="Event"
                  width={900}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.3)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Image
                  src="/images/Mask group-5.PNG"
                  alt="Restaurant"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.4)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Image
                  src="/images/Mask group-6.PNG"
                  alt="Pool Championship"
                  width={600}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.5)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Image
                  src="/images/Mask group-7.PNG"
                  alt="Stadium"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Organizers Section */}
      <motion.section
        className="py-16 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer()}
        >
          <motion.div className="mb-10" variants={fadeIn("down", 0.1)}>
            <motion.h2
              className="text-white text-3xl font-bold mb-4"
              variants={textVariant(0.2)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Organizers
            </motion.h2>
            <motion.div
              className="h-[1px] w-40 bg-[#1C3C2C]"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            ></motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center"
            variants={fadeIn("up", 0.3)}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              src="/images/Organizers.PNG"
              alt="Organizers"
              width={1000}
              height={100}
              className="col-span-full w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-8 border-t border-[#1C3C2C] relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-6"
          variants={fadeIn("up", 0.3)}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src="/images/Jeddah Skyline.PNG"
            alt="Jeddah Skyline"
            width={1000}
            height={100}
            className="col-span-full w-full h-auto"
            unoptimized
          />
        </motion.div>
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[#A3A3A3] text-sm"
            whileHover={{ color: "#BF9447" }}
            transition={{ duration: 0.3 }}
          >
            {new Date().getFullYear()} World Pool Championship. All Rights
            Reserved.
          </motion.p>
        </motion.div>
      </motion.footer>
    </div>
  );
}
