import { ArrowDown } from "lucide-react";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="border rounded-full p-2 flex items-center text-gray-300 justify-center">
        <ArrowDown size={18} />
      </span>
      <p className="py-2 px-4 rounded-full border text-sm text-gray-300 flex items-center justify-center">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
