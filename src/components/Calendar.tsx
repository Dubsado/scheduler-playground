"use client";

import { useState } from "react";
import { DayAvailability } from "@/lib/types";
import { useAvailability } from "@/hooks/useAvailability";
import { TimezoneSelector } from "./TimezoneSelector";
import { TroubleshootingToggle } from "./TroubleshootingToggle";
import { AppointmentTypeSelector } from "./AppointmentTypeSelector";
import { CalendarGrid } from "./CalendarGrid";
import { TimeSlotPanel } from "./TimeSlotPanel";
import { TIMEZONES } from "@/lib/constants";

export function Calendar() {
  const { data, loading, error } = useAvailability();
  const [selectedDay, setSelectedDay] = useState<DayAvailability | null>(null);
  const [isTroubleshooting, setIsTroubleshooting] = useState(false);
  const [selectedAppointmentType, setSelectedAppointmentType] =
    useState<string>("");
  const [selectedTimezone, setSelectedTimezone] = useState<string>(
    TIMEZONES[0].value
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex h-screen">
      {/* Main Calendar View */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Availability Calendar</h1>
          <div className="flex gap-4">
            <TimezoneSelector
              value={selectedTimezone}
              onChange={setSelectedTimezone}
            />
            <TroubleshootingToggle
              isEnabled={isTroubleshooting}
              onToggle={() => setIsTroubleshooting(!isTroubleshooting)}
            />
            {data.appointmentTypes && (
              <AppointmentTypeSelector
                appointmentTypes={data.appointmentTypes}
                selectedAppointmentType={selectedAppointmentType}
                onSelect={setSelectedAppointmentType}
              />
            )}
          </div>
        </div>

        <CalendarGrid days={data.days} onDaySelect={setSelectedDay} />
      </div>

      {/* Side Panel */}
      {selectedDay && (
        <TimeSlotPanel
          day={selectedDay}
          isTroubleshooting={isTroubleshooting}
        />
      )}
    </div>
  );
}
