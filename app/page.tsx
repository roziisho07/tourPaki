import Features from "./Components/Features";

import Hero from "./Components/Hero";
import LatestTours from "./Components/LatestTours";
import Reviews from "./Components/Reviews";

// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center ">
      <main className="flex flex-col  justify-center">
        <Hero />
        <LatestTours />
        <Reviews />
        <Features />
      </main>
    </div>
  );
}
