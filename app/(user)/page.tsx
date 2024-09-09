import Banner from "@/components/Home/Banner";
import Disorder from "@/components/Home/Disorder";
import EmbedMap from "@/components/Home/EmbedMap";
import HomeCarousal from "@/components/Home/HomeCarousal";
import Offer from "@/components/Home/Offer";
import Statistics from "@/components/Home/Statistics";
import TestProcedures from "@/components/Home/TestProcedures";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <HomeCarousal />
      <TestProcedures />
      <Statistics />
      <Offer />

      <Banner />
      <Disorder />

      <EmbedMap />
    </div>
  );
};

export default HomePage;
