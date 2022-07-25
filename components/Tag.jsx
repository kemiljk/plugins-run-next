import React from "react";

const Tag = ({ children, color }) => {
  return (
    <div
      className={
        (colorClasses,
        "flex w-max items-center justify-center rounded-lg border  px-3 py-1 font-mono text-xs font-normal uppercase")
      }
    >
      {children}
    </div>
  );
};

export default Tag;

const colorClasses = () => {
  return {
    props: "color",
    blue: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200",
  }[this.color];
};
