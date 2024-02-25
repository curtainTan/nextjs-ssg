import { Suspense } from 'react';

export const generateStaticParams = async (ctx: any) => {
  const arr = [1,2]
  console.log('call getStaticProps----------', arr);

  return arr.map((item) => {
    return {
      slug: item + '',
    }
  })
}

export default async function Demo(props: { params: { slug: string }}) {

  const slug = props.params.slug;
  const data = await fetch(
    'https://petstore-demo.apifox.com/pet/' + {slug},
    { next: { tags: ['ssg-tag'] } }
  );
  const res = await data?.json();

  const time = new Date()
  console.log('----getStaticProps获取静态数据方法-------', res);

  console.log('----params-----', props);
  return (
    <div className="flex min-h-screen items-center">
      我是ISR案例
      <div>文章ID：{res?.data?.id} + ------ {slug}</div>
      <div>生成时间：{time.toString()}</div>
    </div>
  );
}
