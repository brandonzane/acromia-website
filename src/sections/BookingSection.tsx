"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

export const BookingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Book a Call Now</h2>
        <InlineWidget url="https://calendly.com/acromia/15min" />
      </div>
    </section>
  );
};
