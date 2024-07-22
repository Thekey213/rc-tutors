import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const getColorByStatus = (status) => {
  switch (status) {
    case 'approved':
      return 'green'; // green
    case 'pending':
      return '#ffa500'; // orange
    case 'not approved':
      return 'red'; // red
    default:
      return '#000000'; // black for unknown status
  }
};

const BookingInfo = ({ event }) => (
  <div>
    <p><strong>{event.tutor}</strong> </p>
    <p><strong>{event.subject}</strong> </p>
    <p><strong>Status:</strong> {event.status}</p>
  
  </div>
);

function Calendar() {
  const events = [
    {
      title: 'Computer Science Tutoring',
      start: new Date(2024, 4, 20, 15, 0),
      end: new Date(2024, 4, 20, 16, 0),
      allDay: false,
      desc: 'Algorithms and Data Structures',
      tutor: 'John Doe',
      student: 'Jane Smith',
      subject: 'Computer Science',
      status: 'approved',
      location: 'Room 101'
    },
    {
      title: 'Physics Tutoring',
      start: new Date(2024, 4, 21, 10, 0),
      end: new Date(2024, 4, 21, 11, 0),
      allDay: false,
      desc: 'Quantum Mechanics',
      tutor: 'Emily Brown',
      student: 'Bob Brown',
      subject: 'Physics',
      status: 'pending',
      location: 'Room 202'
    },
    {
      title: 'Software Engineering Tutoring',
      start: new Date(2024, 5, 22, 9, 0),
      end: new Date(2024, 5, 22, 10, 0),
      allDay: false,
      desc: 'Agile Development',
      tutor: 'Alice Johnson',
      student: 'Michael Davis',
      subject: 'Software Engineering',
      status: 'not approved',
      location: 'Room 303'
    },
    // Add more events as needed
  ];

  // Define the eventPropGetter function
  const eventPropGetter = (event) => {
    const backgroundColor = getColorByStatus(event.status);
    return { style: { backgroundColor } };
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ height: "900px" }}>
 <div className="d-flex justify-content-between align-items-center">
        <h1 className='mt-2 ml-3'>Schedule</h1>
        <button
          className="btn mr-3"
          style={{ backgroundColor: 'grey', border: '1px solid white', color:'white' }}
          onClick={handleButtonClick}
        >
          Book Date
        </button>
      </div>
      <hr/>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        components={{
          event: BookingInfo
        }}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
}

export default Calendar;
