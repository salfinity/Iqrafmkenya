"use client";

import AiChatModal from "@/components/AiChatModal";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import axios from "axios";
import TypingAnimation from "../components/TypingAnimation";

const inter = Inter({ subsets: ["latin"] });

interface ChatMessage {
  type: string;
  message: string;
}

export default function LiveChatButton() {
  const [isAiModalOpen, setAiModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAiButtonClick = () => {
    setAiModalOpen(!isAiModalOpen);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message: string) => {
    const url = "/api/chat";

    const data = {
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      <button
        className="bg-purple-700 py-3 px-4 h-10 rounded-full text-white dark:text-gray-300
           hover:bg-purple-600 fixed z-50 bottom-5 right-5 border-3 border-slate-900 dark:border-slate-200"
        onClick={handleAiButtonClick}
      >
        <a className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
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
      <AiChatModal isOpen={isAiModalOpen} onClose={handleAiButtonClick}>
        <div className="flex-grow p-2 md:p-6">
          <div className="flex flex-col space-y-4 h-screen overflow-y-scroll">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.type === "user" ? "bg-purple-500" : "bg-gray-800"
                  } rounded-xl p-2 text-white max-w-sm`}
                >
                  {message.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div key={chatLog.length} className="flex justify-start">
                <div className="bg-gray-800 rounded-xl p-4 text-white max-w-sm">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          <div className="flex rounded-xl border border-gray-700 bg-gray-800">
            <input
              type="text"
              className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-500 rounded-xl px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </AiChatModal>
    </div>
  );
}
