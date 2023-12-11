import React from "react";
import { SponsorRow } from "./SponsorRow";

export const Sponsors = () => {
  return (
    <section id="sponsors">
      <h1 className="text-center text-glow text-4xl md:text-6xl font-semibold text-white pb-8">
        meet our sponsors
      </h1>
      <div className="flex flex-col items-center gap-32 my-12">
        <SponsorRow
          imgArr={[
            { name: "thub", url: "https://t-hub.co/" },
            { name: "edventure", url: "https://edventurepark.com/" },
          ]}
        />
        <SponsorRow
          imgArr={[
            { name: "Swecha", url: "https://swecha.org/" },
            { name: "flutter", url: "#" },
            { name: "TensorFlow", url: "#" },
          ]}
        />
            
        <SponsorRow
          imgArr={[
            { name: "elitceler_technologies", url: "https://elitceler.com/" },
            { name: "knowvation", url: "https://www.knowvationlearnings.in/" },
           
          ]}
        />
      </div>
    </section>
  );
};
