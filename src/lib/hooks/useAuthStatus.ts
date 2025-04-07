"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "@/lib/store/slices/authSlice";

export function useAuthStatus() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await fetch("/api/auth/status");
        if (!response.ok) {
          throw new Error("Failed to fetch auth status");
        }
        const { isLoggedIn } = await response.json();
        dispatch(setLoggedIn(isLoggedIn));
      } catch (error) {
        console.error("Error fetching auth status:", error);
        // You might want to handle this error differently
        dispatch(setLoggedIn(false));
      }
    };

    fetchAuthStatus();
  }, [dispatch]);
}
