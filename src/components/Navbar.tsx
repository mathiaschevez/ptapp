import { UserButton } from "@clerk/nextjs";
 
export function Navbar() {
  return (
    <nav className='flex w-full justify-between'>
      <div>LOGO</div>
      <UserButton afterSignOutUrl='/sign-in'/>
    </nav>
  )
}