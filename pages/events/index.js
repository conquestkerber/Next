import EventList from "@/components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

const EventPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventPage;
