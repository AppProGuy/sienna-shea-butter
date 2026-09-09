"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { track } from "@vercel/analytics";

export type CtaEvent = "whatsapp_click" | "order_click" | "contact_click";

type TrackedCtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  events: CtaEvent[];
  children: ReactNode;
};

export function TrackedCta({ events, onClick, children, ...props }: TrackedCtaProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    for (const name of events) {
      track(name);
    }
    onClick?.(event);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
