import { AuthStatus } from "@/components/AuthStatus";
import { Calendar } from "@/components/Calendar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AuthStatus />
      <Calendar />
    </main>
  );
}
