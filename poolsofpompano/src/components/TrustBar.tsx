import { Award, CalendarCheck, ShieldCheck, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Award, label: "CPO-certified technicians" },
  { icon: CalendarCheck, label: "Same tech, same day, every week" },
  { icon: Users, label: "Direct line to your technician" },
];

export function TrustBar({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-8 gap-y-3 ${
        light ? "text-brand-100" : "text-brand-700"
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm font-semibold">
          <item.icon className={`h-4 w-4 ${light ? "text-sun-400" : "text-brand-500"}`} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
