"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const categories = [
  {
    title: "Bangla Medium",
    image:
      "https://images.unsplash.com/photo-1740511317118-be319524995f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "English Medium",
    image:
      "https://plus.unsplash.com/premium_photo-1663011158241-9b03859902df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "English Version",
    image:
      "https://plus.unsplash.com/premium_photo-1681248156472-ce2223f2fce9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Madrasa Medium",
    image:
      "https://plus.unsplash.com/premium_photo-1661382504923-8085addc989c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Admission Preparation",
    image:
      "https://plus.unsplash.com/premium_photo-1661400674151-11fd67f8b4ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Special Child Education",
    image:
      "https://plus.unsplash.com/premium_photo-1716637064348-3ae62380a519?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "University Help",
    image:
      "https://plus.unsplash.com/premium_photo-1681248156477-9d00c17bd594?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Test Preparation",
    image:
      "https://plus.unsplash.com/premium_photo-1681584471820-e1fe387e9ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Language Learning",
    image:
      "https://images.unsplash.com/photo-1620366269121-f1213792f014?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Arts & Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1723507275425-9933ea98a320?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Singing",
    image:
      "https://plus.unsplash.com/premium_photo-1661380465763-9e25699f6898?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dancing",
    image:
      "https://plus.unsplash.com/premium_photo-1661340623773-e8abc9924d46?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Professional Skill Development",
    image:
      "https://plus.unsplash.com/premium_photo-1706546717442-5bcc1f6288b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Special Skill Development",
    image:
      "https://plus.unsplash.com/premium_photo-1664297844174-d7dfb8d0e7f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full bg-background py-20 px-10">
        <h1 className="text-3xl font-bold mb-10">
          Programs & Learning Solutions
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="slider"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-md overflow-hidden mb-13 shadow-md bg-background border border-foreground/20">
                {/* IMAGE WRAPPER */}
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                    quality={100}
                    priority={false}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-extralight">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
