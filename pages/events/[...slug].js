import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvent } from "@/dummy-data";
import EventList from "@/components/events/EventList";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  /* to setup string into number without parse */
  const numberYear = +filteredYear;
  const numberMonth = +filteredMonth;

  if (isNaN(numberYear) || isNaN(numberMonth) || numberYear > 2023) {
    return <p>Invalid value</p>;
  }

  const filteredEvent = getFilteredEvent({
    year: numberYear,
    month: numberMonth,
  });

  if (!filteredEvent || filteredEvent.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      <EventList items={filteredEvent} />
    </div>
  );
};

export default FilteredEvents;
