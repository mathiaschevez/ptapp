'use client';

import { UserButton, useUser } from "@clerk/nextjs";
 
export function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) return 'Loading user';
  if (!isSignedIn || !user) return 'No User Found';
  return (
    <nav className='flex w-full justify-between'>
      <div>LOGO</div>
      <UserButton afterSignOutUrl='/sign-in'/>
    </nav>
  )
}