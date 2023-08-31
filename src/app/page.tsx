"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken: string) => {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '', {
    global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
  });
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

 
export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) return 'Loading';
  if (!isSignedIn || !user) return 'No User Found';

  return <div>
    <div>Hello, {user?.firstName}</div>
    <PersonalTrainers />
  </div>
}

function PersonalTrainers() {
  const { getToken } = useAuth();

  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: 'supabase' });
    const supabase = await supabaseClient(supabaseAccessToken ?? '');
    
    // TODO #2: Replace with your database table name
    const { data, error } = await supabase.from('users').select();
    // TODO #3: Handle the response
    console.log(data, 'data')
  };

  return <div>
    Personal Trainers
    <button onClick={fetchData}>Fetch Data</button>
  </div>
}