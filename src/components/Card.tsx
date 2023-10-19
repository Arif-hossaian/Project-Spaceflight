import React from "react";
import clsx from "clsx";

export const Card = ({ children, className }:any) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-100 bg-white p-6 shadow-xl cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};