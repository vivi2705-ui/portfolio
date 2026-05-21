import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-gradient-to-br from-[#5B45D4] to-[#EC4899]"
    : "text-[#3d2f8f] border-[#5B45D4] hover:border-[#ec4899] hover:text-[#ec4899]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer font-medium transition-colors`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
