"use client";

import { cn } from "@/lib/utils";

interface LoadingLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const LoadingLink = ({ href, className, children }: LoadingLinkProps) => {
  const isInvalid = !href || href === "#";

  if (isInvalid) {
    return <div className={cn(className, "cursor-not-allowed opacity-70")}>{children}</div>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};
