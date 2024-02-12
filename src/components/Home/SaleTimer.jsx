import { useEffect, useState } from 'react';
import timerIntervalFunc from './timerIntervalFunc';

export default function SaleTimer() {
  const [customStartDate,setCustomStartData]= useState('');
  const [timeSales, setTimeSales] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(()=>{
    const loadData = async()=>{
      const response = await fetch('http://localhost:3001/data/1');
      const data = await response.json();
      setCustomStartData(data);
    }
    loadData();
  },[])

  useEffect(() => {
    const startDate = new Date(customStartDate.count);
    timerIntervalFunc(startDate, setTimeSales);
    return () => clearInterval(timerIntervalFunc);
  }, [customStartDate]);
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
  );
}
