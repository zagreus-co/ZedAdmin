import React from "react";

const CategoryTitle = ({ title }) => {
  return (
    <span className="block text-[13px] font-semibold my-2 uppercase text-[var(--fallback-bc,oklch(var(--bc)/.7))]">
      {title}
    </span>
  );
};

export default CategoryTitle;
