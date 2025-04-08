export interface TimeSlot {
  startTime: number; // seconds from midnight
  endTime: number; // seconds from midnight
  isAvailable: boolean;
  unavailabilityReasons?: string[];
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
  availableTimezones: string[];
  appointmentTypes?: AppointmentType[];
}

export interface BrandInfo {
  name: string;
  logo: string;
  primaryColor: string;
}
