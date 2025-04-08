import { DayAvailability, TimeSlot, WorkingHours } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimeSlotPanelProps {
  day: DayAvailability;
  workingHours: WorkingHours[];
  isTroubleshooting: boolean;
}

// Helper function to format seconds from midnight to HH:MM
function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export function TimeSlotPanel({
  day,
  workingHours,
  isTroubleshooting,
}: TimeSlotPanelProps) {
  // Create a map of booked slots for easy lookup
  const bookedSlots = new Map<number, TimeSlot>();
  day.slots.forEach((slot) => {
    bookedSlots.set(slot.startTime, slot);
  });

  // Generate all slots based on working hours
  const allSlots: (TimeSlot & { isBooked: boolean })[] = [];
  workingHours.forEach((wh) => {
    let currentTime = wh.startTime;
    while (currentTime < wh.endTime) {
      const isBooked = bookedSlots.has(currentTime);
      const bookedSlot = bookedSlots.get(currentTime);
      const slot: TimeSlot & { isBooked: boolean } = {
        startTime: currentTime,
        endTime: currentTime + 1800, // 30 minutes
        isBooked,
        unavailabilityReasons: bookedSlot?.unavailabilityReasons,
      };
      allSlots.push(slot);
      currentTime += 1800; // Move to next 30-minute slot
    }
  });

  return (
    <div className="w-96 border-l p-4">
      <Card>
        <CardHeader>
          <CardTitle>{new Date(day.date).toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {allSlots.map((slot) => (
            <Card
              key={slot.startTime}
              className={`p-2 ${!slot.isBooked ? "bg-green-50" : "bg-red-50"}`}
            >
              <CardContent className="p-2">
                <div className="font-medium">
                  {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                </div>
                {slot.isBooked && isTroubleshooting && (
                  <div className="text-sm text-red-600">
                    {slot.unavailabilityReasons?.join(", ")}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
