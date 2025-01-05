"use client";

import type { ReactNode } from "react";
import { Reshaped } from "reshaped";
import "reshaped/bundle.css";
import "reshaped/themes/reshaped/theme.css";


export default function Wrap({ children }: { children: ReactNode }) {
  return <Reshaped defaultColorMode="dark" theme="reshaped">{children}</Reshaped>;
};

