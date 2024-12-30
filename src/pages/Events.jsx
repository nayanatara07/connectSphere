import React from "react";

const events = [
  {
    title: "Event III",
    date: "September 10, 2024",
    time: "3:00 PM - 5:00 PM",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
    isUpcoming: true,
  },
  {
    title: "Event IV",
    date: "September 15, 2024",
    time: "9:00 AM - 9:00 PM",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
    isUpcoming: true,
  },
  {
    title: "Event V",
    date: "September 20, 2024",
    time: "11:00 AM - 1:00 PM",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
    isUpcoming: true,
  },
  {
    title: "Event II",
    date: "August 25, 2024",
    time: "10:00 AM - 12:00 PM",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
    isUpcoming: false,
  },
  {
    title: "Event I",
    date: "August 10, 2024",
    time: "2:00 PM - 4:00 PM",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
    isUpcoming: false,
  },
];

const Events = () => {
  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);

  const renderEvent = (event, index) => (
    <div
      key={index}
      className="mb-10 ml-4 relative group"
    >
      <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white"></div>
      <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1 group-hover:text-teal-500">
          {event.title}
        </h2>
        <p className="text-gray-500 text-sm mb-2">
          {event.date} • {event.time}
        </p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <a
          href={event.link}
          className="text-teal-500 font-semibold hover:text-teal-600"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        connectSphere Events
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="relative border-l-4 border-teal-500">
            {upcomingEvents.map(renderEvent)}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Past Events</h2>
          <div className="relative border-l-4 border-gray-400">
            {pastEvents.map(renderEvent)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
