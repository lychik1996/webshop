import { useEffect, useState } from "react";
import timerIntervalFunc from "./timerIntervalFunc";
const StartDateAdv = '2024-02-05T12:00:00';


export default function AdvenceTimer(){
  
    const [timeAdv, setTimeAdv] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
    
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