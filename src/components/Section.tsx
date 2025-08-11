import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="my-4">
      <h2 className="text-sm font-semibold text-gray-500 px-4 uppercase mb-2">{title}</h2>
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default Section;
