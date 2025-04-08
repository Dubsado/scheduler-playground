"use client";

import { useBrand } from "@/hooks/useBrand";
import Image from "next/image";

export function Brand() {
  const { data, loading, error } = useBrand();

  if (loading) return <div>Loading brand...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No brand data available</div>;

  return (
    <div className="flex items-center gap-4 p-4">
      {data.logo && (
        <div className="relative h-12 w-12">
          <Image
            src={data.logo}
            alt={`${data.name} logo`}
            fill
            className="object-contain"
          />
        </div>
      )}
      <h1 className="text-2xl font-bold" style={{ color: data.primaryColor }}>
        {data.name}
      </h1>
    </div>
  );
}
