import { useEffect, useMemo, useState } from "react";

const customStartDate = '2024-02-29T12:00:00';
export default function SaleTimer(){
    const [timeSales, setTimeSales] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      const timerIntervalFunc = (startDate, setEffect) => {
        const timerInterval = setInterval(() => {
          const elapsedTime = startDate - new Date();
    
          if (elapsedTime >= 0) {
            const remainingTime = calculateTimeRemaining(elapsedTime);
            setEffect(remainingTime);
          } else {
            clearInterval(timerInterval);
          }
        }, 1000);
      };
      const calculateTimeRemaining = useMemo(() => (elapsedTime) => {
        const remainingSeconds = Math.floor(elapsedTime / 1000);
    
        const days = Math.floor(remainingSeconds / (24 * 60 * 60));
        const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
    
        return {
          days,
          hours,
          minutes,
          seconds,
        };
      }, []);
      useEffect(() => {
        const startDate = new Date(customStartDate);
        timerIntervalFunc(startDate, setTimeSales);
        return () => clearInterval(timerIntervalFunc);
      }, []);
    return (
        <>
        <div className="nav_home_bot_time">
                <div>
                  <p className="name">Days</p>
                  <p className="time">
                    {timeSales.days < 10 && '0'}
                    {timeSales.days}
                  </p>
                </div>
                <p className="dought">:</p>
                <div>
                  <p className="name">Hours</p>
                  <p className="time">
                    {timeSales.hours < 10 && '0'}
                    {timeSales.hours}
                  </p>
                </div>
                <p className="dought">:</p>
                <div>
                  <p className="name">Minutes</p>
                  <p className="time">
                    {timeSales.minutes < 10 && '0'}
                    {timeSales.minutes}
                  </p>
                </div>
                <p className="dought">:</p>
                <div>
                  <p className="name">Seconds</p>
                  <p className="time">
                    {timeSales.seconds < 10 && '0'}
                    {timeSales.seconds}
                  </p>
                </div>
              </div>
        </>
    )
}