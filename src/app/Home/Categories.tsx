"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    title: "Bangla Medium",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "English Medium",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "English Version",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Madrasa Medium",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Admission Preparation",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Special Child Education",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "University Help",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Test Preparation",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Language Learning",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Arts & Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Singing",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dancing",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Professional Skill Development",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Special Skill Development",
    image:
      "https://plus.unsplash.com/premium_photo-1760605942862-e6026f4377e3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full bg-background py-20 px-10">
        <h1 className="text-3xl font-bold mb-10">Programs & Learning Solutions</h1>
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
              <div className="rounded-xl overflow-hidden mb-13 shadow-md bg-background border border-foreground/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
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
