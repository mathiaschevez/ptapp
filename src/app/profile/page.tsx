import supabase from '@/supabase';
import { auth } from '@clerk/nextjs';

export default async function Profile() {
  const { userId } = auth();
  const { data, error } = await supabase
    .from('trainers')
    .select()
    .eq('userId', userId);

  console.log(data, 'here')

  return <div>
    here
    {/* <ProfileHeader user={user} />
    <ProfileTabs user={user} /> */}
  </div>
}