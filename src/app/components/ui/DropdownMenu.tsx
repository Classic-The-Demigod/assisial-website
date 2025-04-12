"use client";
import { DropdownMenuProps } from "@/app/utils";
import { useState, useRef, useEffect } from "react";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openIndex !== null &&
        menuRefs.current[openIndex] &&
        !menuRefs.current[openIndex]?.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex]);

  return (
    <div className="flex md:overflow-hidden h-[400px] flex-wrap justify-center gap-4  w-full">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative "
          ref={(el) => {
            menuRefs.current[index] = el;
          }}
        >
          <button
            onClick={() => toggleDropdown(index)}
            className="flex items-center justify-center p-4 gap-4 bg-white rounded-full border-3 border-[#0D0D0D]/28  w-full min-w-[290px]"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.83203 6.98438H21.7898"
                stroke="black"
                strokeWidth="1.49648"
                strokeLinecap="round"
              />
              <path
                d="M3.83203 11.9727H21.7898"
                stroke="black"
                strokeWidth="1.49648"
                strokeLinecap="round"
              />
              <path
                d="M3.83203 16.9609H21.7898"
                stroke="black"
                strokeWidth="1.49648"
                strokeLinecap="round"
              />
            </svg>

            <span className="font-medium text-gray-800">{item.label}</span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6115 8.92773L14.1067 15.4324C13.3385 16.2006 12.0815 16.2006 11.3133 15.4324L4.80859 8.92773"
                stroke="#0D0D0D"
                strokeWidth="1.49648"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openIndex === index && (
            <div className="absolute z-9 w-full mt-2 bg-white rounded-lg shadow-2xl  overflow-y-auto">
              <div className="py-1">
                {item.items.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
