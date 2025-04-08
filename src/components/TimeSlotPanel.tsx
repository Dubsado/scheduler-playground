import { DayAvailability, TimeSlot } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimeSlotPanelProps {
  day: DayAvailability;
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

export function TimeSlotPanel({ day, isTroubleshooting }: TimeSlotPanelProps) {
  return (
    <div className="w-96 border-l p-4">
      <Card>
        <CardHeader>
          <CardTitle>{new Date(day.date).toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {day.slots.map((slot: TimeSlot) => (
            <Card
              key={slot.startTime}
              className={`p-2 ${
                slot.isAvailable ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <CardContent className="p-2">
                <div className="font-medium">
                  {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                </div>
                {!slot.isAvailable && isTroubleshooting && (
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
