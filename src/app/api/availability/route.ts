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
            startTime: timeToSeconds("09:00"),
            endTime: timeToSeconds("09:30"),
            isAvailable: true,
          },
          {
            startTime: timeToSeconds("09:30"),
            endTime: timeToSeconds("10:00"),
            isAvailable: false,
            unavailabilityReasons: ["Already booked"],
          },
          {
            startTime: timeToSeconds("10:00"),
            endTime: timeToSeconds("10:30"),
            isAvailable: true,
          },
        ],
      },
      {
        date: "2024-04-09",
        slots: [
          {
            startTime: timeToSeconds("09:00"),
            endTime: timeToSeconds("09:30"),
            isAvailable: true,
          },
          {
            startTime: timeToSeconds("09:30"),
            endTime: timeToSeconds("10:00"),
            isAvailable: true,
          },
        ],
      },
    ],
    currentTimezone: "America/New_York",
    availableTimezones: [
      "America/New_York",
      "America/Los_Angeles",
      "Europe/London",
    ],
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
  };

  return NextResponse.json(response);
}
