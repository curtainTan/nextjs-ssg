'use client'
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function Nav() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    setInterval(() => {
      const timeStr = dayjs().format('YYYY-MM-DD HH:mm:ss');
      setTime(timeStr);
    }, 1000);
  }, [])

  const click = () => {
    console.log('---点击了？？----')
  }

  return (
    <div className="flex" onClick={click}>
      我是 son 组件
      <div>现在的时间是：{time}</div>
    </div>
  );
}
