import MonthView from "../components/calendar/MonthView";

export default function CalendarPage() {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Check Availability</h1>
      <p className="text-muted-foreground mb-8">
        Browse open slots for your private tour. Weekend slots are available by
        default.
      </p>

      <div className="flex justify-center">
        <MonthView />
      </div>
    </div>
  );
}
