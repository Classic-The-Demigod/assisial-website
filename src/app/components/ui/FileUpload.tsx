"use client"
import { useState, useRef, DragEvent, ChangeEvent } from "react";
import uploadIcon from "@/app/assets/icons/upload.svg";
import Image from "next/image";

interface FileUploadProps {
  supportedFormats: string;
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  supportedFormats,
  onFileSelect,
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    // You can add validation logic here based on supportedFormats
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-3 border-[#9B9B9B] border-dashed rounded-lg ${
        isDragging ? "border-purple-500 bg-purple-50" : ""
      } p-6 text-center flex flex-col items-center justify-center h-48`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        className="hidden"
        accept=".pdf,.doc"
      />

      <div className="mb-2">
        <Image src={uploadIcon} alt="" />
      </div>

      <p className="text-base font-medium text-gray-700">
        {selectedFile ? selectedFile.name : "Drop document here"}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Supported format: {supportedFormats}
      </p>

      <button
        type="button"
        onClick={handleBrowseClick}
        className="mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Browse Files
      </button>
    </div>
  );
};

export default FileUpload;
