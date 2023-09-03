'use client';
import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function Footer() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) return <></>;
  if (!isSignedIn || !user) return <></>;

  return (
    <div>Footer</div>
  )
}