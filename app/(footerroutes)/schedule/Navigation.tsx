import React from "react";

interface NavigationProps {
  days: string[];
  activeDay: number;
  onDayChange: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  days,
  activeDay,
  onDayChange,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7 space-x-6 max-w-6xl mx-auto gap-2">
      {days.map((day, index) => (
        <button
          key={index}
          className={`px-1 py-2 ${
            activeDay === index
              ? "border-b-8 border-orange-600 mb-2 text-orange-600 dark:text-orange-600 text-2xl font-bold"
              : "text-gray-500 text-xl font-bold"
          } dark:text-white`}
          onClick={() => onDayChange(index)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
