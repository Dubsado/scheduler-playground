import { Button } from "@/components/ui/button";

interface TroubleshootingToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export function TroubleshootingToggle({
  isEnabled,
  onToggle,
}: TroubleshootingToggleProps) {
  return (
    <Button variant={isEnabled ? "default" : "outline"} onClick={onToggle}>
      Troubleshooting Mode
    </Button>
  );
}
