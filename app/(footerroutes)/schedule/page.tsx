"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import ScheduleItem from "./ScheduleItem";
import DropdownMenu from "./DropdownMenu";
import { scheduleData } from "@/lib/data";

// Define an interface for the schedule item
interface ScheduleItemData {
  photo: string;
  day: string;
  scheduleName: string;
  hostName: string;
  time: string;
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState(0);

  const handleDayChange = (dayIndex: number) => {
    setActiveDay(dayIndex);
  };

  // Use the ScheduleItemData interface to define the type of scheduleData

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="font-serif md:text-4xl text-2xl text-center mt-2 mb-8">
        <span
          className="underline decoration-6 
       decoration-orange-400 "
        >
          WEEKLY
        </span>{" "}
        SCHEDULE
      </h1>
      <div className="hidden md:block">
        <Navigation
          days={daysOfWeek}
          activeDay={activeDay}
          onDayChange={handleDayChange}
        />
      </div>

      {/* Dropdown menu for small screens */}
      <DropdownMenu
        days={daysOfWeek}
        activeDay={activeDay}
        onDayChange={handleDayChange}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8">
        {scheduleData
          .filter((item) => item.day === daysOfWeek[activeDay])
          .map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
      </div>
    </div>
  );
};

export default SchedulePage;