export interface TimeSlot {
  startTime: number; // seconds from midnight
  endTime: number; // seconds from midnight
  unavailabilityReasons?: string[];
}

export interface WorkingHours {
  startTime: number; // seconds from midnight
  endTime: number; // seconds from midnight
}

export interface DayAvailability {
  date: string;
  slots: TimeSlot[];
}

export interface AppointmentType {
  id: string;
  name: string;
  appointmentDuration: number; // in minutes
}

export interface AvailabilityResponse {
  days: DayAvailability[];
  currentTimezone: string;
  appointmentTypes?: AppointmentType[];
  workingHours: WorkingHours[];
}

export interface BrandInfo {
  name: string;
  logo: string;
  primaryColor: string;
}
