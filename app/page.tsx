"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Spaces from "@/components/sections/Spaces";
import Amenities from "@/components/sections/Amenities";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialSpaceId, setInitialSpaceId] = useState<string | null>(null);

  const openBooking = (spaceId?: string) => {
    setInitialSpaceId(spaceId ?? null);
    setBookingOpen(true);
  };

  return (
    <>
      <Loader />
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <About />
        <Spaces onBook={openBooking} />
        <Amenities />
        <Pricing onBook={() => openBooking()} />
        <Testimonials />
        <Location />
        <Contact onBook={() => openBooking()} />
      </main>
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialSpaceId={initialSpaceId}
      />
    </>
  );
}
