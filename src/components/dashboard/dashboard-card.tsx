import { Box } from '@mui/material'
import styles from './dashboard.module.css'
import React from 'react';

interface CardProps {
    height?: number,
    padding?: number
}

interface DashboardCardProps extends CardProps {
    children?: React.ReactNode
}

export default function DashboardCard({ children, ...props }: DashboardCardProps) {

    const height = props.height ? props.height : 300;
    const padding = props.padding ? props.padding : 3;

    return (
        <Box sx={{height: height, padding: padding}} className={styles.card}>
            <main>{children}</main>
        </Box>
    )
}