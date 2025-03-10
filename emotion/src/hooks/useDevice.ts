"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useIsDesktop(minWidth = "1920px") {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({
    query: `(min-width: ${minWidth})`,
  });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  return isDesktop;
}

export function useIsTablet(minWidth = "47.875rem", maxWidth = "1919px") {
  const [isTablet, setIsTablet] = useState(false);

  const tablet = useMediaQuery({
    query: `(min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  });

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return isTablet;
}
