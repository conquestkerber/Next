import EventList from "@/components/events/EventList";
import { Inter } from "next/font/google";
import { getAllEvents } from "@/dummy-data";
import EventSearch from "@/components/events/EventSearch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const events = getAllEvents();
  return (
    <>
      <div>
        <EventList items={events} />
      </div>
    </>
  );
}
