'use client';
import { Box, Tab, Tabs } from '@mui/material';
import { UserResource } from "@clerk/types";
import { useMemo, useState } from 'react';

export function ProfileTabs({ user }: { user: UserResource }) {
  const [value, setValue] = useState(0);


  const isTrainer = useMemo(() => {
    return false;
  }, []);

  return <>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} aria-label="basic tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
    {value === 0 ? <div>first</div> : <div>dsfasd</div>}
  </>
}