"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
  return (
    <motion.div
      className={`mb-4 rounded-2xl overflow-hidden ${
        isOpen ? "border-none" : "border-3 border-[#0D0D0D47]"
      }`}
    >
      <div
        onClick={toggleOpen}
        className={`w-full cursor-pointer transition-colors duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-[#160F92] to-[#AF47AA] text-white"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <h3 className="md:text-xl text-lg font-extrabold">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-6 h-6 text-3xl font-extrabold"
          >
            {isOpen ? "−" : "+"}
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5">
                <p className="text-xl">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

interface FAQProps {
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

const FAQs: React.FC<FAQProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(""); // Default open item

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      {faqs.map((faq) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FAQItem
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            toggleOpen={() => toggleItem(faq.id)}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FAQs;
