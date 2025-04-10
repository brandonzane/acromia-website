"use client";

import { ReactNode } from "react";
import { ScrollProvider } from "./ScrollProvider";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      {/* Left edge */}
      <div className="edge-left" />
      {/* Right edge */}
      <div className="edge-right" />

      {/* Corner accents */}
      <div className="corner corner-top-left" />
      <div className="corner corner-top-right" />
      <div className="corner corner-bottom-left" />
      <div className="corner corner-bottom-right" />

      {children}
    </ScrollProvider>
  );
};
