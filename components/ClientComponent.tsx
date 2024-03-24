"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

const ClientComponent = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  // This is a side effect that runs after the first render and sets the isMounted state to true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This is a conditional rendering that returns null if the component is not mounted yet
  if (!isMounted) {
    return <Skeleton className="hidden w-full h-24 lg:block" />;
  }

  return <> {children}</>;
};

export default ClientComponent;
