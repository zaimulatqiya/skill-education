"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface ScrollButtonProps extends React.ComponentProps<typeof Button> {
  targetId: string;
}

export function ScrollButton({ targetId, onClick, ...props }: ScrollButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <Button onClick={handleClick} {...props} />;
}
