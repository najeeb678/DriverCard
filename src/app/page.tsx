"use client";

import DriverCardDetails from "@/components/DriverCardDetails";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pt-0 md:pt-16 px-0 md:px-12 mt-0">
      <DriverCardDetails
        onBack={() => {
          console.log("Back button clicked");
        }}
      />
    </div>
  );
}
