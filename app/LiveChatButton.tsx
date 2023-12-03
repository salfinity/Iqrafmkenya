import React from "react";

export default function LiveChatButton() {
  return (
    <div>
      <button
        className="bg-slate-700 py-3 px-4 h-10 rounded-full text-white dark:text-gray-300
 hover:bg-slate-600 fixed z-50 bottom-5 right-5 border-3 border-slate-900 dark:border-slate-200"
      >
        <a
          className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
          href="sms:+254727444454"
        >
          <span className="text-gray-100 font-semibold dark:text-white transition group-hover:text-gray-200/75">
            Live Chat
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </a>
      </button>
      ;
    </div>
  );
}
