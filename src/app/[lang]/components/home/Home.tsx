"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Locale } from "../../../../../i18n.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePage = ({ lang, page }: { lang: Locale; page: any }) => {
  const participants = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      company: "Tech Innovations",
      initials: "AJ",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "UX Designer",
      company: "Creative Minds",
      initials: "MG",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Data Scientist",
      company: "Quantum Analytics",
      initials: "DC",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Product Manager",
      company: "Future Labs",
      initials: "SW",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "Cloud Solutions",
      initials: "JW",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "AI Researcher",
      company: "Neural Networks Inc",
      initials: "ED",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Frontend Architect",
      company: "WebCraft Studios",
      initials: "MB",
    },
    {
      id: 8,
      name: "Olivia Taylor",
      role: "Security Specialist",
      company: "CyberShield",
      initials: "OT",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A2A1A] relative overflow-hidden">
      {/* Hero Section */}
      <section
        className={`relative z-10 h-[100vh] max-h-[800px] min-h-[600px]`}
      >
        {/* Hero Background Image */}
        <div className={`absolute inset-0 z-0 rtl:rotate-180 rtl:scale-y-[-1]`}>
          <div className="absolute inset-0 bg-[#0A2A1A] md:hidden opacity-80 z-0"></div>
          <Image
            src="/images/Full Header Screen 2.png"
            alt="Pool Championship"
            width={1920}
            height={1080}
            className="w-full h-[100vh] object-cover"
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#0A2A1A]/40 to-[#0A2A1A]/40`}
          ></div>

          {/* Triangular decoration */}
          <div
            className={`absolute bottom-0 right-0 rtl:right-auto rtl:left-0 z-10`}
          >
            <Image
              src="/images/Balls Pattern.png"
              alt="Decoration"
              width={150}
              height={150}
              className=""
            />
          </div>
        </div>

        {/* Hero Content */}
        <div
          className={`container mx-auto h-full px-4 flex items-center justify-end rtl:justify-start relative z-10 animate-staggered`}
        >
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className={`mb-6`}>
              <h1 className="text-4xl lg:text-5xl">
                <span className={`text-white block font-light tracking-wide`}>
                  {page.hero?.subtitle || "Experience The Best"}
                </span>
                <span
                  className={`text-[#BF9447] text-5xl lg:text-7xl block font-bold tracking-wide`}
                >
                  {page.hero?.title || "POOL GAME EVER."}
                </span>
              </h1>
            </div>

            <p className={`text-white text-lg font-light tracking-wide`}>
              {page.hero?.location || "Taking Place in Jeddah, Saudi Arabia"}
              <br />
              {page.hero?.date || "3 - 8 June 2024"}
            </p>
          </div>
        </div>
      </section>

      {/* A Game of Skill and Speed Section */}
      <section className="relative pt-0 pb-0 z-10 min-h-[700px] flex items-center">
        {/* Triangular decoration */}
        <div
          className={`absolute bottom-0 left-0 rtl:left-auto rtl:right-0 z-10 animate-slideUp delay-200`}
        >
          <Image
            src="/images/Balls Pattern 2.png"
            alt="Decoration"
            width={150}
            height={150}
            className=""
          />
        </div>
        {/* Primary color overlay for background */}
        <div className="absolute inset-0 bg-[#0A2A1A] opacity-80 z-0"></div>

        {/* Saudi flag in background with primary color overlay */}
        <div
          className={`absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80%] h-[80%] opacity-30 animate-fadeIn delay-300`}
        >
          <Image
            src="/images/Saudi Flag.png"
            alt="Saudi Flag"
            width={800}
            height={800}
            className="object-contain rtl:transform rtl:scale-x-[-1]"
          />
        </div>

        {/* Player image */}
        <div
          className={`absolute top-0 bottom-0 right-0 rtl:right-auto rtl:left-0 -translate-y-28 w-[50%] animate-slideRight`}
        >
          <Image
            src="/images/Mask Group 10.png"
            alt="Pool Player"
            width={800}
            height={800}
            className="object-contain rtl:transform rtl:scale-x-[-1]"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div
              className={`w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8 rtl:pr-0 rtl:lg:pr-0 rtl:pl-0 rtl:lg:pl-8 leading-16 animate-slideLeft delay-200`}
            >
              <div className="p-6 rounded-lg">
                <h2
                  className={`text-[#BF9447] text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wide uppercase animate-fadeIn delay-300`}
                >
                  {page.skillSection?.title || "A GAME OF SKILL AND SPEED"}
                </h2>
                <p
                  className={`text-white text-base font-medium leading-relaxed tracking-wide uppercase animate-slideUp delay-400`}
                >
                  {page.skillSection?.subtitle ||
                    "GET YOUR CHANCE TO WATCH THESE TALENTED PLAYERS."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section className="relative py-16 z-10">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute bottom-[20%] left-0 rtl:left-auto rtl:right-0 w-[150px] h-[150px] opacity-10 animate-spin-slow">
            <Image
              src="/images/Balls Pattern 2.png"
              alt=""
              width={150}
              height={150}
              className="object-contain rtl:transform rtl:scale-x-[-1]"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <h3
            className={`text-white text-3xl font-bold mb-8 ml-4 rtl:ml-0 rtl:mr-4 animate-slideLeft`}
          >
            {page.matches?.live || "Live"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Live Match Card 1 */}
            <div
              className={`bg-white rounded-none p-6 shadow-lg transition-transform hover:scale-[1.01] animate-fadeIn delay-200`}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.png"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
                  </span>
                </div>

                {/* VS and Live indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-[#BF9447] flex items-center justify-center mb-3 w-10 h-10">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <span className="bg-red-700 text-white px-6 py-1 rounded-full text-xs font-semibold">
                    {page.matches?.live || "Live"}
                  </span>
                </div>

                {/* Player 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player 2 Photo.png"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Match Card 2 */}
            <div
              className={`bg-white rounded-none p-6 shadow-lg transition-transform hover:scale-[1.02] animate-fadeIn delay-300`}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.png"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
                  </span>
                </div>

                {/* VS and Live indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-[#BF9447] flex items-center justify-center mb-3 w-10 h-10">
                    <span className="text-white font-bold text-sm">VS</span>
                  </div>
                  <span className="bg-red-700 text-white px-6 py-1 rounded-full text-xs font-semibold">
                    {page.matches?.live || "Live"}
                  </span>
                </div>

                {/* Player 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player 2 Photo.png"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[#0A2A1A] font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h3
            className={`text-white text-3xl font-bold mb-8 ml-4 rtl:ml-0 rtl:mr-4 animate-slideLeft delay-200`}
          >
            {page.matches?.upcoming || "Upcoming"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upcoming Match Card 1 */}
            <div
              className={`bg-[#0D3520] border border-[#1C3C2C] rounded-none p-6 shadow-lg transition-transform hover:scale-[1.02] animate-fadeIn delay-400`}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.png"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
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
                      src="/images/Player 2 Photo.png"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Match Card 2 */}
            <div
              className={`bg-[#0D3520] border border-[#1C3C2C] rounded-none p-6 shadow-lg transition-transform hover:scale-[1.02] animate-fadeIn delay-500`}
            >
              <div className="flex justify-between items-center">
                {/* Player 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                    <Image
                      src="/images/Player Photo.png"
                      alt="Player 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
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
                      src="/images/Player 2 Photo.png"
                      alt="Player 2"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    {page.matches?.playerName || "Player Name"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section className="py-16 relative">
        {/* Background WPC2024 image */}
        <div className="absolute inset-0 bottom-0 z-0 opacity-20">
          <Image
            src="/images/WPC2024-1080x1080.png"
            alt="WPC 2024 Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`flex items-center justify-between mb-10 animate-fadeIn`}
          >
            <div className="flex items-center">
              <div className={`animate-slideRight`}>
                <h3 className="text-white text-3xl font-bold mr-4 rtl:mr-0 rtl:ml-4">
                  {page.players?.topPlayers || "Top Players"}
                </h3>
              </div>
              <div className={`h-[1px] bg-[#1C3C2C] animate-growWidth`}></div>
            </div>
            <div className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <Link
                href={`/${lang}/players`}
                className="see-all-button bg-[#BF9447] text-white px-4 py-2 text-sm font-medium rounded-full"
              >
                {page.common?.viewAll || "See All"}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
            {/* Player 1 */}
            <div
              className={`player-card p-4 rounded-none transition-transform hover:scale-[1.02] animate-fadeIn delay-200`}
            >
              <Image
                src="/images/Top Player Full.png"
                alt="Top Player"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Player 2 */}
            <div
              className={`player-card p-4 rounded-none transition-transform hover:scale-[1.02] animate-fadeIn delay-300`}
            >
              <Image
                src="/images/Top Playe Full.png"
                alt="Top Player"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Player 3 */}
            <div
              className={`player-card p-4 rounded-none transition-transform hover:scale-[1.02] animate-fadeIn delay-400`}
            >
              <Image
                src="/images/Top Playe Full-1.png"
                alt="Top Player"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular News Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bottom-0 z-0 opacity-60">
          <Image
            src="/images/Sparks.png"
            alt="Sparks Background"
            fill
            className="object-cover"
          />
        </div>
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4 relative z-10 mb-10">
            <div
              className={`flex items-center justify-between mb-10 animate-fadeIn`}
            >
              <h2
                className={`text-white text-3xl font-bold animate-fadeIn delay-200`}
              >
                {page.news?.popularNews || "Popular News"}
              </h2>
              <div className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Link
                  href={`/${lang}/news`}
                  className="bg-[#BF9447] hover:bg-[#C9A633] transition-colors duration-300 text-white font-medium px-5 py-3 rounded-full text-sm"
                >
                  {page.news?.seeMore || "See More"}
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main News - Left Side */}
              <div className={`w-full lg:w-7/12 animate-slideRight delay-200`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image
                      src="/images/Mask group-1.png"
                      alt="News"
                      width={800}
                      height={400}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#0A2A1A] text-2xl font-bold mb-2">
                      {page.news?.headline || "Headline May Be Written Here."}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {page.news?.details ||
                        "Details Here Details Here Details Here Details Here Details Here Details Here Details Here"}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">12-5-2024</span>
                      <Link
                        href={`/${lang}/news/1`}
                        className="bg-[#0A2A1A] hover:bg-[#454545] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                      >
                        {page.common?.readMore || "Read More"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video News - Right Side */}
              <div
                className={`w-full lg:w-5/12 flex flex-col gap-6 h-[460px] animate-slideLeft delay-200`}
              >
                {/* Video 1 */}
                <div
                  className={`bg-white rounded-lg overflow-hidden shadow-lg flex transition-transform hover:scale-[1.02] animate-slideLeft delay-300`}
                >
                  <div className="w-1/2 relative">
                    <Image
                      src="/images/Mask group-2.png"
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
                      {page.news?.videoTitle ||
                        "Video Title May Be Written Here."}
                    </h3>
                    <div className="text-gray-500 text-sm">12-5-2024</div>
                  </div>
                </div>

                {/* Video 2 */}
                <div
                  className={`bg-white rounded-lg overflow-hidden shadow-lg flex transition-transform hover:scale-[1.02] animate-slideLeft delay-400`}
                >
                  <div className="w-1/2 relative">
                    <Image
                      src="/images/Mask group-2.png"
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
                      {page.news?.videoTitle ||
                        "Video Title May Be Written Here."}
                    </h3>
                    <div className="text-gray-500 text-sm">12-5-2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Participants Section */}
        <section className="container relative mx-auto p-4 mt-8 z-10">
          <h2 className="text-white text-3xl font-bold mb-8 z-10">
            {page.participants?.title || "Participants"}
          </h2>
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="participants-swiper"
            >
              {participants.map((person) => (
                <SwiperSlide key={person.id}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-32 h-32 mb-4 border border-[#BF9447] rounded-full">
                      <Image
                        src={"/images/Play Circle.png"}
                        alt={person.name}
                        width={100}
                        height={100}
                        className="w-34 h-34 object-cover rounded-full p-2"
                      />
                    </div>
                    <div className="text-white text-lg font-semibold text-center">
                      {person.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div
              className={`w-full mb-8 lg:mb-0 z-10 animate-slideRight delay-200`}
            >
              <h2
                className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-wide uppercase animate-fadeIn delay-300`}
              >
                {page.about?.title || "ABOUT"}
              </h2>
              <p
                className={`text-white text-sm md:text-base mb-6 md:mb-8 leading-relaxed animate-slideUp delay-400`}
              >
                {page.about?.description ||
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}
              </p>
              <div className={`animate-slideUp delay-500`}>
                <Link
                  href={`/${lang}/about`}
                  className="inline-block bg-[#BF9447] text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[#A37E3B] transition-colors duration-300"
                >
                  {page.common?.readMore || "Read More"}
                </Link>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              {/* Circle background */}
              <div
                className={`absolute ltr:right-0 rtl:left-0 top-4 z-0 w-[80%] md:w-auto hidden md:block animate-slideLeft delay-200 animate-gentle-float`}
              >
                <Image
                  src="/images/Mask Group 8.png"
                  alt="Circle Background"
                  width={500}
                  height={500}
                  className="object"
                />
              </div>

              {/* Billiard table image */}
              <div
                className={`absolute ltr:right-0 rtl:left-0 top-0 z-10 w-full md:w-auto flex justify-center md:block rtl:transform rtl:scale-x-[-1] animate-slideLeft delay-300`}
              >
                <Image
                  src="/images/58878.png"
                  alt="Pool Table"
                  width={400}
                  height={300}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 relative z-10 bg-[#0A2A1A]">
        <div className="container mx-auto px-4">
          <h2
            className={`text-white text-4xl font-bold mb-10 ml-4 rtl:ml-0 rtl:mr-4 animate-fadeIn`}
          >
            {page.gallery?.title || "Gallery"}
          </h2>

          {/* Desktop Gallery Layout - Hidden on mobile */}
          <div className="relative hidden md:block">
            {/* Restaurant image (top right) */}
            <div
              className={`absolute top-0 right-[18rem] w-[38%] z-20 transition-transform hover:scale-[1.02] animate-slideLeft delay-200`}
            >
              <Image
                src="/images/Mask group-5.png"
                alt="Restaurant"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Stadium image (bottom right) */}
            <div
              className={`absolute top-[200px] right-[5rem] w-[30%] z-20 transition-transform hover:scale-[1.02] animate-slideUp delay-300`}
            >
              <Image
                src="/images/Mask group-7.png"
                alt="Stadium"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Event image (large triangle - left) */}
            <div
              className={`absolute top-[50px] left-[14rem] w-[60%] z-10 transition-transform hover:scale-[1.02] animate-slideRight delay-300`}
            >
              <Image
                src="/images/Mask group-4.png"
                alt="Event"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Championship image (bottom) */}
            <div
              className={`absolute bottom-[-13rem] right-[20rem] w-[28%] z-30 transition-transform hover:scale-[1.02] animate-slideUp delay-400`}
            >
              <Image
                src="/images/Mask group-6.png"
                alt="Pool Championship"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Spacer div to maintain section height */}
            <div className="h-[650px]"></div>
          </div>

          {/* Mobile Gallery Layout - Shown only on mobile */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4">
              <div
                className={`transition-transform hover:scale-[1.02] animate-fadeIn delay-200`}
              >
                <Image
                  src="/images/Mask group-4.png"
                  alt="Event"
                  width={900}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div
                className={`transition-transform hover:scale-[1.02] animate-fadeIn delay-300`}
              >
                <Image
                  src="/images/Mask group-5.png"
                  alt="Restaurant"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div
                className={`transition-transform hover:scale-[1.02] animate-fadeIn delay-400`}
              >
                <Image
                  src="/images/Mask group-6.png"
                  alt="Pool Championship"
                  width={600}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div
                className={`transition-transform hover:scale-[1.02] animate-fadeIn delay-500`}
              >
                <Image
                  src="/images/Mask group-7.png"
                  alt="Stadium"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className={`mb-10 animate-fadeIn`}>
            <h2
              className={`text-white text-3xl font-bold mb-4 animate-slideDown delay-200`}
            >
              {page.organizers?.title || "Organizers"}
            </h2>
            <div
              className={`h-[1px] bg-[#1C3C2C] animate-growWidth delay-300`}
            ></div>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center animate-slideUp delay-300`}
          >
            <Image
              src="/images/Organizers.png"
              alt="Organizers"
              width={1000}
              height={100}
              className="col-span-full w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t border-[#1C3C2C] relative z-10 animate-fadeIn delay-400`}
      >
        <div
          className={`mb-6 transition-transform hover:scale-[1.02] animate-slideUp delay-500`}
        >
          <Image
            src="/images/Jeddah Skyline.png"
            alt="Jeddah Skyline"
            width={1000}
            height={100}
            className="col-span-full w-full h-auto"
            unoptimized
          />
        </div>
        <div
          className={`container mx-auto px-4 text-center animate-slideUp delay-600`}
        >
          <p className="text-[#A3A3A3] text-sm hover:text-[#BF9447] transition-colors duration-300">
            {new Date().getFullYear()}{" "}
            {page.footer?.copyright ||
              "World Pool Championship. All Rights Reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
