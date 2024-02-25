import { ResponseLimit } from 'next';
import { revalidateTag } from 'next/cache'
export const dynamic = 'force-dynamic'


export async function GET(request: Request) {
  console.log('----request-----', request);

  revalidateTag('ssg-tag');
  // @ts-ignore
  return Response?.json({ name: 'okay', data: '更新--ssg-tag--成功' });
}
