export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-68ca4-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  console.log(data);
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.feature);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.id === id);
}

export async function getFilteredEvent(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventData = new Date(event.date);
    return (
      eventData.getFullYear() === year && eventData.getMonth() === month - 1
    );
  });
  return filteredEvents;
}
