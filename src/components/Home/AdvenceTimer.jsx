import { useEffect, useMemo, useState } from "react";
const StartDateAdv = '2024-02-03T12:00:00';
export default function AdvenceTimer(){
    const [timeAdv, setTimeAdv] = useState({
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
      //calculate Date
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
        const startDate = new Date(StartDateAdv);
        timerIntervalFunc(startDate, setTimeAdv);
        return () => clearInterval(timerIntervalFunc);
      }, []);
    return(
        <>
        <div className="advertising_left_timer">
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.days < 10 && '0'}
                  {timeAdv.days}
                </p>
                <p className="name">Days</p>
              </div>
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.hours < 10 && '0'}
                  {timeAdv.hours}
                </p>
                <p className="name">Hours</p>
              </div>
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.minutes < 10 && '0'}
                  {timeAdv.minutes}
                </p>
                <p className="name">Minutes</p>
              </div>
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.seconds < 10 && '0'}
                  {timeAdv.seconds}
                </p>
                <p className="name">Seconds</p>
              </div>
            </div>
        </>
    )
}