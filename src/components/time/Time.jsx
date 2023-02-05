import React, { useState, useEffect } from 'react';
import clock from "../../assets/clock.png";
import date from "../../assets/date.png";
import './Time.css';

function Time() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className="time-container">
            <p className= "day">
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    weekday: 'long',
                })}
            </p>
            <div className= "date-hour-container">
                <img src={date} alt="Date"/>
            <p className="date">
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </p>
                <img src={clock} alt="Clock"/>
            <p className="hour">
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </p>
            </div>
        </div>
    );
}

export default Time;