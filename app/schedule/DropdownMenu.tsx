// DropdownMenu.tsx
import { ChevronsUpDown } from 'lucide-react';
import React from 'react';

interface DropdownMenuProps {
  days: string[];
  activeDay: number;
  onDayChange: (dayIndex: number) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ days, activeDay, onDayChange }) => (
  <div className="md:hidden text-center w-[210px] mx-auto relative">
    <select
      value={activeDay}
      onChange={(e) => onDayChange(Number(e.target.value))}
      className="
        block 
        appearance-none 
        w-[220px] 
        bg-none border 
        border-gray-400 
        hover:border-gray-500 
        px-4 py-2 pr-1 rounded shadow 
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

    {/* Fixed icon on the right side of the dropdown */}
    <ChevronsUpDown className="absolute top-1/2 right-4 transform -translate-y-1/2 h-4 w-4 opacity-50" />
  </div>
);

export default DropdownMenu;
