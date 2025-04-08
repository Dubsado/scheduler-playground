"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Link from "next/link";

export function AuthStatus() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div className="p-4">
      <p className="mb-2">
        <span className="font-semibold mb-2">Auth Status</span> Currently{" "}
        {isLoggedIn ? "logged in" : "logged out"}
      </p>
      <Link className="text-blue-500" href="/components-demo">
        Components Demo
      </Link>
    </div>
  );
}
