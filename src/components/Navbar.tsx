'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
 
export function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) return <SkeletonNavbar />;
  if (!isSignedIn || !user) return <></>;
  return (
    <nav className='flex w-full justify-between'>
      <Link href='/'>LOGO</Link>
      <div className='flex gap-9 items-center'>
        <Link href='/profile' className='font-bold'>Profile</Link>
        <UserButton afterSignOutUrl='/sign-in'/>
      </div>
    </nav>
  )
}

export function SkeletonNavbar() {
  return <>
    
  </>
}