import { NextResponse } from "next/server";
import { AvailabilityResponse } from "@/lib/types";

// Helper function to convert HH:MM to seconds from midnight
function timeToSeconds(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60;
}

export async function GET() {
  // Mock data
  const response: AvailabilityResponse = {
    days: [
      {
        date: "2024-04-08",
        slots: [
          {
            startTime: timeToSeconds("09:30"),
            endTime: timeToSeconds("10:00"),
            unavailabilityReasons: ["Already booked"],
          },
        ],
      },
      {
        date: "2024-04-09",
        slots: [
          {
            startTime: timeToSeconds("10:30"),
            endTime: timeToSeconds("11:00"),
            unavailabilityReasons: ["Already booked"],
          },
        ],
      },
    ],
    currentTimezone: "America/New_York",
    appointmentTypes: [
      {
        id: "1",
        name: "Standard Consultation",
        appointmentDuration: 30,
      },
      {
        id: "2",
        name: "Extended Consultation",
        appointmentDuration: 60,
      },
    ],
    workingHours: [
      {
        startTime: timeToSeconds("09:00"),
        endTime: timeToSeconds("17:00"),
      },
    ],
  };

  return NextResponse.json(response);
}
