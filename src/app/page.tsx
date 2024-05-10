"use client";

import { Suspense } from "react";

import { WelcomePage } from "@refinedev/core";
import './global.css';

export default function IndexPage() {
  return (
    <Suspense>
      <div className="text-[red] bg-[blue] text-center">red</div>
      {/* <WelcomePage /> */}
    </Suspense>
  );
}
