"use client";
import Banner from "./Home/Banner";
import Categories from "./Home/Categories";
import Contact from "./Home/Contact";
import LiveStatsBar from "./Home/LiveStatsBar";
import Students from "./Home/Students";
import Teachers from "./Home/Teachers";

export default function Home() {
  return (
    <>
      <Banner />
      <LiveStatsBar />
      <Students />
      <Categories />
      <Teachers />
      <Contact />
    </>
  );
}
