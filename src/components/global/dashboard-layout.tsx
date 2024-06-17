import DashboardNav from './dashboard-nav';
import { Box } from '@mui/material';
import styles from './global.module.css'
import React from 'react';
import DashboardTopNav from './dashboard-topnav';

export default function DashboardLayout({ children }: Readonly <{children: React.ReactNode}>) {
    return (
        <>
        <DashboardTopNav/>
        <Box sx={{ display: 'flex' }}>
            <DashboardNav />
            <main style={{width: '100%'}} className={styles.mainContent}>{children}</main>
        </Box>
        </>
    )
}