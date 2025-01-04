"use client";

import type { ReactNode } from "react";
import { Reshaped } from "reshaped";

export default function App({ children }: { children: ReactNode }) {
  return <Reshaped defaultColorMode="dark" theme="reshaped">{children}</Reshaped>;
};

