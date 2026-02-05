"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const LoadingLink = ({ href, className, children }: LoadingLinkProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // Simulate loading delay before opening new tab
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <a href={href} className={cn("relative", className)} onClick={handleClick}>
      {isLoading ? (
        <>
          <span className="opacity-0 flex items-center gap-2">{children}</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        </>
      ) : (
        children
      )}
    </a>
  );
};
