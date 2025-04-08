import { AppointmentType } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AppointmentTypeSelectorProps {
  appointmentTypes: AppointmentType[];
  selectedAppointmentType: string;
  onSelect: (appointmentTypeId: string) => void;
}

export function AppointmentTypeSelector({
  appointmentTypes,
  selectedAppointmentType,
  onSelect,
}: AppointmentTypeSelectorProps) {
  return (
    <Select
      value={selectedAppointmentType || "none"}
      onValueChange={(value) => onSelect(value === "none" ? "" : value)}
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select appointment type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">Select Appointment Type</SelectItem>
        {appointmentTypes.map((type) => (
          <SelectItem key={type.id} value={type.id}>
            {type.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
