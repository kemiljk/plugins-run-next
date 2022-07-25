import React from "react";

export default function SubheaderView({ children }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex w-full justify-center py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-neutral-700 dark:text-neutral-300">
          {children}
        </h2>
      </div>
    </div>
  );
}
