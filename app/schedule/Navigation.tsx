import React from 'react';

interface NavigationProps {
  days: string[];
  activeDay: number;
  onDayChange: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ days, activeDay, onDayChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7 space-x-6 max-w-6xl mx-auto gap-2">
      {days.map((day, index) => (
        <button
        key={index}
        className={`px-4 py-2 border-slate-400 border-4 ${
          activeDay === index ? 'bg-slate-700 dark:bg-slate-600 text-white border-blue-500' : 'bg-gray-300 border-gray-300'
        } dark:bg-gray-800 dark:border-gray-800 dark:text-white`}
        onClick={() => onDayChange(index)}
      >
        {day}
      </button>
      
      ))}
    </div>
  );
};

export default Navigation;
