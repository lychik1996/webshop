import { useEffect, useState } from 'react';
import timerIntervalFunc from './timerIntervalFunc';

export default function AdvenceTimer() {
  const [StartDateAdv, setStartDataAdv] = useState('');
  const [timeAdv, setTimeAdv] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:3001/data/2');
      const data = await response.json();
      setStartDataAdv(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const startDate = new Date(StartDateAdv.count);
    timerIntervalFunc(startDate, setTimeAdv);
    return () => clearInterval(timerIntervalFunc);
  }, [StartDateAdv]);
  return (
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
  );
}
