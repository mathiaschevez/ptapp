import React, { Suspense } from 'react'
import Loading from './loading'
import Profile from './page'

export default function Layout() {
  return <Suspense fallback={<Loading />}>
    <Profile />
  </Suspense>
}

