"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

export const BookingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white rounded-md">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <div className="tag">Get In touch</div>
        </div>
        <h2 className="section-title">Book a Call Now</h2>
        <InlineWidget url="https://calendly.com/acromia/15min" />
      </div>
    </section>
  );
};
