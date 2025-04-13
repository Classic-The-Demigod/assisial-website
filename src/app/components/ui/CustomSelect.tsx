
import { useState, useRef, useEffect } from "react";
import arrow from "@/app/assets/icons/arrow-down.svg";
import Image from "next/image";
interface CustomSelectProps {
  placeholder?: string;
  options?: string[];
  onChange?: (option: string) => void;
  defaultValue?: string;
  className?: string;
  labelClassName?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  placeholder,
  options,
  onChange,
  defaultValue,
  className = "",
  labelClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultValue || ""
  );
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative" ref={selectRef}>
        <button
          type="button"
          className="relative flex justify-between w-full bg-white border-3 border-[#9B9B9B] rounded-2xl px-4 py-5 text-left cursor-pointer text-gray-700"
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedOption || placeholder}</span>
          <span>
            <Image src={arrow} alt="" />
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white shadow-lg rounded-2xl py-1 text-base overflow-auto focus:outline-none max-h-60">
            <ul tabIndex={-1} role="listbox" aria-labelledby="listbox-label">
              {options?.map((option, index) => (
                <li
                  key={index}
                  className={`cursor-pointer select-none relative py-2 px-4 hover:bg-gray-50 text-gray-700`}
                  id={`listbox-option-${index}`}
                  role="option"
                  aria-selected={selectedOption === option}
                  onClick={() => handleOptionSelect(option)}
                >
                  <span className="block truncate">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
