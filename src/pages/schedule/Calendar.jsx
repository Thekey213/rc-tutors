import React, { useState } from 'react';

const Calendar = ({ tutorSessions }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    // Render days of the week
    const renderDaysOfWeek = () => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return daysOfWeek.map((day, index) => (
            <div key={index} className="day">{day}</div>
        ));
    };

    // Check if a tutor session is scheduled on a specific date
    const isSessionScheduled = (date) => {
        return tutorSessions.includes(date);
    };

    // Render calendar cells for the month
    const renderCalendarCells = () => {
        // In a real implementation, you would generate the cells dynamically based on the current month
        const numCells = 30;
        const cells = [];
        for (let i = 1; i <= numCells; i++) {
            const isScheduled = isSessionScheduled(i);
            cells.push(
                <div
                    key={i}
                    className={`cell ${isScheduled ? 'session-scheduled' : ''} ${selectedDate === i ? 'selected' : ''}`}
                    onClick={() => handleDateClick(i)}
                >
                    {i}
                </div>
            );
        }
        return cells;
    };

    return (
        <div className="calendar">
            <div className="weekdays">{renderDaysOfWeek()}</div>
            <div className="calendar-grid">{renderCalendarCells()}</div>
        </div>
    );
};

export default Calendar;
