"use client";

import Navbar from "@/components/Navbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function NavbarWrapper() {
  const isXL = useMediaQuery("(min-width: 1280px)");

  return <Navbar forceDarkAtTop={isXL} />;
}