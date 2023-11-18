// components/FloatingModal.tsx
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface FloatingModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingModal: React.FC<FloatingModalProps> = ({ showModal, setShowModal }) => {
  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setShowModal(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="inline-block align-middle h-screen">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl dark:bg-gray-800">
              {/* Your modal content here */}

              <button
                type="button"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Your modal content goes here */}
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Subscribe Now!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Add your subscription form or any other content here.
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FloatingModal;
