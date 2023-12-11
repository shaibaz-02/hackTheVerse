import React from "react";
import { TimelineCard } from "./TimelineCard";
import { TimelineDay } from "./TimelineDay";
import { motion } from "framer-motion";

export const Timeline = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20,
      },
    },
  };
  return (
    <div className="mx-auto md:flex md:gap-20" id="timeline">
      <h1 className="text-center text-glow md:self-center text-5xl md:text-6xl font-semibold text-white pb-8">
        Timeline
      </h1>
      <div>
        <div className="text-white mt-6 mx-auto" id="timeline">
          {/* <motion.ol
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-l border-gray-200"
          > */}
          <motion.ol
  initial="hidden"
  whileInView="show"
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20,
      },
    },
  }}
  className="relative border-l border-gray-200"
>
              
            <TimelineCard
              heading={"Registration begins"}
              timing={"1st Dec 2023"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Registration Ends"}
              timing={"17th Dec 2023"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineDay day={1} date={"16th Dec 2023"} />
            <TimelineCard
              heading={"Registration"}
              timing={"09:20 AM to 10:20 AM"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Opening Ceremony & Announcement of problem statements"}
              timing={"10:20 AM to 11:30 AM"}
              dotColor={"bg-[#008000]"}
            />
             <TimelineCard
              heading={"Selection Of Problem Statements"}
              timing={"11:30 AM to 12:00 PM"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Problem Statement Discussion & Team Formation"}
              timing={"12:10 PM to 12:30 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Hackathon Begins"}
              timing={"12:30 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Lunch Break"}
              timing={"1:30 PM to 2:00 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Initial Round of Judging"}
              timing={"4:30 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Top Team Announcement"}
              timing={"Timing will be shared"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Dinner"}
              timing={"8:00 PM onwards"}
              dotColor={"bg-[#008000]"}
            />
            
            <TimelineCard
              heading={"Reviewing Progress On Ideas"}
              timing={"2:00 AM onwards"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineDay day={2} date={"17th Dec 2023"} />
            
            
            <TimelineCard
              heading={"Breakfast"}
              timing={"8:00 AM to 9:00 AM"}
              dotColor={"bg-[#008000]"}
            />
            <TimelineCard
              heading={"Submission Of Git Repository"}
              timing={"9:10 AM"}
              dotColor={"bg-[#008000]"}
            />
            {/* <TimelineCard
              heading={"Final Presentation Start"}
              timing={"9:10 AM"}
              dotColor={"bg-[#008000]"}
            /> */}
            <TimelineCard
              heading={"Final Round of Judging"}
              timing={"10:10 PM"}
              dotColor={"bg-[#008000]"}
            />
            {/* <TimelineCard
              heading={"Lunch"}
              timing={"12:30 PM to 1:30 PM"}
              dotColor={"bg-[#008000]"}
            /> */}
              <TimelineCard
              heading={"Closing Cermony & Winners Announcement"}
              timing={"12:00 PM"}
              dotColor={"bg-[#008000]"}
            />
          </motion.ol>
        </div>
      </div>
    </div>
  );
};
