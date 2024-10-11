import React from "react";
import Navbar from "@/app/(components)/Navbar";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      Sidebar
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}
