import { DayAvailability, WorkingHours } from "@/lib/types";

interface CalendarGridProps {
  days: DayAvailability[];
  workingHours: WorkingHours[];
  onDaySelect: (day: DayAvailability) => void;
}

// Helper function to format seconds from midnight to HH:MM
function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export function CalendarGrid({
  days,
  workingHours,
  onDaySelect,
}: CalendarGridProps) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <div
          key={day.date}
          className="p-4 border rounded cursor-pointer bg-white hover:bg-gray-50"
          onClick={() => onDaySelect(day)}
        >
          <div className="font-bold">
            {new Date(day.date).toLocaleDateString()}
          </div>
          <div className="text-sm mt-2">
            <div className="font-medium">Working Hours:</div>
            {workingHours.map((wh, index) => (
              <div key={index} className="text-gray-600">
                {formatTime(wh.startTime)} - {formatTime(wh.endTime)}
              </div>
            ))}
          </div>
          <div className="text-sm mt-2">
            <div className="font-medium">Booked Slots:</div>
            {day.slots.length > 0 ? (
              day.slots.map((slot) => (
                <div key={slot.startTime} className="text-red-600">
                  {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                </div>
              ))
            ) : (
              <div className="text-green-600">No bookings</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
