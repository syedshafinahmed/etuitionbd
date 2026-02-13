"use client"; 
import Banner from "./Home/Banner";
import LiveStatsBar from "./Home/LiveStatsBar";
import Students from "./Home/Students";

export default function Home() {
  return (
    <>
      <Banner />
      <LiveStatsBar />
      <Students />
    </>
  );
}
