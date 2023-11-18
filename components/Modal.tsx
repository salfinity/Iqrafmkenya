import React, { ReactNode } from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div
      className="fixed inset-0 p-12 md:p-48 flex flex-wrap 
      justify-center items-center w-full mx-auto h-full z-[1000] 
      before:fixed before:inset-0 before:w-full before:h-full 
      before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
      style={modalStyle}
    >
      <div className="w-full max-w-lg justify-center bg-white shadow-lg rounded-xl mx-auto px-4 py-4 relative">
        <div className="flex items-center pb-2 border-b">
          <h3 className="text-lg text-black font-semibold flex-1">Subscriptions</h3>
          <MdOutlineClose
            className="w-6 h-6 cursor-pointer fill-black hover:fill-red-500"
            onClick={onClose}
          />
        </div>
        <div className="my-4">{children}</div>
        <div className="border-t flex justify-end pt-2 space-x-4">
        <a
            href="https://wa.me/254702802937"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare
              className="cursor-pointer text-slate-600 hover:text-slate-700"
              size={40}
            />
          </a>
          <button
            type="button"
            className="px-6 py-2 rounded text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded text-white text-sm font-semibold border-none outline-none bg-slate-600 hover:bg-slate-700 active:bg-blue-600"
            onClick={() => {
              window.location.href = 'tel:+254702802937';
              onClose();
            }}
          >
            Call us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
