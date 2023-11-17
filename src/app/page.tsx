import React, { FC } from "react";

import Banner from "@/components/Banner";

import Hero from "@/app/parts/home/hero";
import NewArrivals from "@/app/parts/home/new-arrivals";

const Home: FC = () => {
  return (
    <main className="min-h-screen">
      <Banner />
      <Hero />
      <NewArrivals />
    </main>
  );
};

export default Home;
