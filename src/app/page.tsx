"use client"; 
import Banner from "./Home/Banner";
import Categories from "./Home/Categories";
import LiveStatsBar from "./Home/LiveStatsBar";
import ScrollToTop from "./Home/ScrollToTop";
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
      <ScrollToTop />
    </>
  );
}
