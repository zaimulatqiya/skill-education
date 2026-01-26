import React from "react";

export function BackgroundEffects() {
  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none z-0" />
    </>
  );
}
