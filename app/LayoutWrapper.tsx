"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBookingPage = pathname === "/booking";

  return (
    <>
      {!isBookingPage && <Navbar />}
      {children}
      {!isBookingPage && <Footer />}
    </>
  );
}
