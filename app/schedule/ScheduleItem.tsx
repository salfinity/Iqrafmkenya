import React from 'react';
import Image from 'next/image';

interface ScheduleItemProps {
  photo: string;
  day: string;
  scheduleName: string;
  hostName: string;
  time: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ photo, day, scheduleName, hostName, time }) => {
  return (
    <div className="p-4 mb-4 text-center justify-center">
      <Image width={250} height={250} src={photo} alt="Schedule" className="mb-4 mx-auto rounded-full" />
      <p className="text-lg font-bold">{day}</p>
      <p className="text-gray-700 dark:text-gray-400">{scheduleName}</p>
      <p className="text-gray-700 dark:text-gray-400">{hostName}</p>
      <p className="text-gray-700 dark:text-gray-400">{time}</p>
    </div>
  );
};

export default ScheduleItem;
