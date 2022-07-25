import React from "react";

const FigJamTag = ({ children }) => {
  return (
    <div className="flex w-max items-center justify-center rounded-lg border  border-pink-200  bg-pink-50 px-3 py-1 font-mono text-xs font-normal uppercase text-pink-700 dark:border-pink-900 dark:bg-pink-900/30 dark:text-pink-200">
      {children}
    </div>
  );
};

export default FigJamTag;
