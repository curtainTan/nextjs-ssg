import { Suspense } from 'react';
import NavBar from './nav';
import Son from './son';
import moment from 'moment';

export default async function Demo() {
  const now = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <NavBar />
      <div>现在的时间是：{now}</div>
      <Suspense
        fallback={
          <div>正在加载子组件</div>
        }
      >
        <Son />
      </Suspense>
    </div>
  );
}
