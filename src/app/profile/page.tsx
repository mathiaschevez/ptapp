'use client';
import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material';

export default function Profile() {
  return <div>
    <ProfileHeader />
    <ProfileTabs />
  </div>
}

function ProfileHeader() {
  return <>
    Header
  </>
}

function ProfileTabs() {
  const [value, setValue] = useState(0);


  return <>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} aria-label="basic tabs example">
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
    </Box>
  </>
}