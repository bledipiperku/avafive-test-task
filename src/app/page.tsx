import React, { FC } from "react";

import Banner from "@/components/Banner";

import Hero from "@/parts/home/hero";
import NewArrivals from "@/parts/home/new-arrivals";

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
