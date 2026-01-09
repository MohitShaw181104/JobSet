import HomeView from '@/modules/home/ui/views/home-view'
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Page = async () => {

  const session= await auth.api.getSession({
    headers: await headers(),
  });

  if(!session){
    redirect("/signin");
  }

  return (
    <HomeView />
  )
}

export default Page
