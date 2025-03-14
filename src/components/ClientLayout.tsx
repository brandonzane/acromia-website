"use client";

import { ReactNode } from "react";
import { ScrollProvider } from "./ScrollProvider";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return <ScrollProvider>{children}</ScrollProvider>;
};
