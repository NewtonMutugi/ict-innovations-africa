import React, { useState, useEffect } from "react";
// import eventData from "./eventData";

interface CountdownProps {
  eventDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ eventDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);

  useEffect(() => {
    if (eventDate === "To be Announced" || "TBA") {
      setTimeRemaining("To be Announced");
      return;
    }

    const targetDate = new Date(eventDate);

    const calculateTimeRemaining = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeRemaining("Event has started or has passed!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="m-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 p-4 text-center font-bold text-white shadow-lg">
      {timeRemaining === "To be Announced" ? (
        <span className="text-lg">📅 {timeRemaining}</span>
      ) : (
        <div className="flex flex-col items-center">
          <span className="text-2xl uppercase"> Event Day Countdown</span>
          <span className="mt-2 text-4xl font-extrabold">{timeRemaining}</span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
