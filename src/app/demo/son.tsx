'use server'
import React from 'react';
import ClickSon from './clickSon';
const fetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('okkkkkk');
    }, 2000);
  })
}

export default async function Nav() {
  await fetch();


  return (
    <div className="flex" >
      我是 son 组件
      <ClickSon />
    </div>
  );
}
