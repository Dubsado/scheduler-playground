import { useState, useEffect } from "react";
import { BrandInfo } from "@/lib/types";

export function useBrand() {
  const [data, setData] = useState<BrandInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/brand");
        if (!response.ok) {
          throw new Error("Failed to fetch brand data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
