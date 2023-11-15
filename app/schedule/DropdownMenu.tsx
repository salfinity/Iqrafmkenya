// DropdownMenu.tsx
import React from 'react';

interface DropdownMenuProps {
  days: string[];
  activeDay: number;
  onDayChange: (dayIndex: number) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ days, activeDay, onDayChange }) => (
  <div className="md:hidden text-center w-[210px] mx-auto">
    <select
      value={activeDay}
      onChange={(e) => onDayChange(Number(e.target.value))}
      className="
      block 
      appearance-none 
      w-[220px] 
      bg-white border 
      border-gray-400 
      hover:border-gray-500 
      px-4 py-2 pr-8 rounded shadow 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline-blue 
      focus:border-blue-300 
      transition 
      duration-150 ease-in-out"
    >
      {days.map((day, index) => (
        <option key={index} value={index}>
          {day}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownMenu;
