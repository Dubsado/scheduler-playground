import { AuthStatus } from "@/components/AuthStatus";
import { Calendar } from "@/components/Calendar";
import { Brand } from "@/components/Brand";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Brand />
      <AuthStatus />
      <Calendar />
    </main>
  );
}
