"use client";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <section className="min-h-screen w-full items-center justify-center">
      <div>
        <h2>{error}</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </section>
  );
}
