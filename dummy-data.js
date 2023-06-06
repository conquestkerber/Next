const DATA = [
  {
    id: "ea4fe72a-13b6-4f4a-bc02-3157f306347f",
    title: "Battle of Los Angeles",
    description: "Hypertensive encephalopathy",
    location: "Paraguarí",
    date: "Male",
    image: "images/1.jpg",
    feature: true,
  },
  {
    id: "33d657ea-c80e-40be-80dd-c2752fbcd446",
    title: "United States of Secrets (Part One): The Program",
    description:
      "Open fractures involving skull or face with other bones with subarachnoid, subdural, and extradural hemorrhage, with concussion, unspecified",
    location: "Tanuma",
    date: "Male",
    image: "images/2.jpg",
    feature: true,
  },
  {
    id: "1ab26bc1-5014-41f5-823b-61b13414eff2",
    title: "Way, Way Back, The",
    description: "Malignant neoplasm of ureteric orifice",
    location: "Mosopa",
    date: "Female",
    image: "images/3.jpg",
    feature: true,
  },
  {
    id: "b6d61617-2bb9-4e5c-afd0-fd7bae8e728f",
    title: "Dead & Buried",
    description: "Arteritis, unspecified",
    location: "Wenjī",
    date: "Female",
    image: "images/4.jpg",
    feature: true,
  },
  {
    id: "a42e1c44-c997-40ba-a76f-37638982761c",
    title: "Uninvited, The",
    description:
      "Other accidental submersion or drowning in water transport accident injuring occupant of small boat, powered",
    location: "Spasskoye",
    date: "Male",
    image: "images/5.jpg",
    feature: true,
  },
  {
    id: "1d6a9b8b-2591-4c3a-9cb6-ce626a71483e",
    title: "Golden Age, The (Âge d'Or, L')",
    description: "Open fracture of acromial process of scapula",
    location: "Krasnyy Oktyabr’",
    date: "Female",
    image: "images/6.jpg",
    feature: true,
  },
  {
    id: "8b58093d-6796-469f-a5d0-1b428641f481",
    title: "Breaking Out (Vägen ut)",
    description: "Mumps pancreatitis",
    location: "Margoyoso",
    date: "Male",
    image: "images/7.jpg",
    feature: false,
  },
  {
    id: "286bccf8-f33e-423c-803b-a9a6df0df924",
    title: "Resident Evil: Damnation",
    description: "Poisoning by dental drugs topically applied",
    location: "Yaojiaji",
    date: "Male",
    image: "images/8.jpg",
    feature: true,
  },
  {
    id: "d51a4deb-aead-4391-baf7-ba391a2ca033",
    title: "Killing Floor, The",
    description: "Multiple papillomata due to yaws and wet crab yaws",
    location: "Guadalupe",
    date: "Male",
    image: "images/9.jpg",
    feature: true,
  },
  {
    id: "ddcba410-d55d-4bec-9758-232ce5987f3f",
    title: "Lucky Them",
    description: "Exposure to SARS-associated coronavirus",
    location: "Shanshi",
    date: "Male",
    image: "images/10.jpg",
    feature: true,
  },
];
export function getEvents() {
  return DATA.filter((event) => {
    event.feature;
  });
}

export function getAllEvents() {
  return DATA;
}

export function getFilteredEvent(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = DATA.filter((event) => {
    const eventData = new Date(event.date);
    return eventData.getFullYear() === year && event.getMonth() === month - 1;
  });
  return filteredEvents;
}

export function getEventById(id) {
  return DATA.find((event) => event.id === id);
}
