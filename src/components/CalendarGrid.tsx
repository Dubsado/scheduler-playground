import { DayAvailability } from "@/lib/types";

interface CalendarGridProps {
  days: DayAvailability[];
  onDaySelect: (day: DayAvailability) => void;
}

export function CalendarGrid({ days, onDaySelect }: CalendarGridProps) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <div
          key={day.date}
          className={`p-4 border rounded cursor-pointer ${
            day.slots.some((slot) => slot.isAvailable)
              ? "bg-green-100 hover:bg-green-200"
              : "bg-gray-100"
          }`}
          onClick={() => onDaySelect(day)}
        >
          <div className="font-bold">
            {new Date(day.date).toLocaleDateString()}
          </div>
          <div className="text-sm">
            {day.slots.filter((slot) => slot.isAvailable).length} slots
            available
          </div>
        </div>
      ))}
    </div>
  );
}
