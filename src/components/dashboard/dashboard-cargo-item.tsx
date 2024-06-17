import { Avatar, Box, Button, Link } from '@mui/material'
import { CargoCompany } from '../../utils'
import styles from './dashboard.module.css'
import React from 'react'

interface CargoProps {
    company: CargoCompany,
    date: Date,
    locationFrom: string,
    locationTo: string
}

export default function DashboardCargoItem(props: CargoProps) {
    return (
        <Box className={styles.dashboardItemContainer} sx={{ position: 'relative' }}>
            <Box className={styles.dashboardItem} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar className={styles.profileAvatar} src={props.company.companyLogo}/>
                <Link className={`${styles.profileName} ${styles.link}`} underline="none"><strong>{ props.company.companyName }</strong></Link>
                <Box sx={{ marginLeft: 0.6 }}> 
                    has requested cargo transport from 
                    <Link underline="none" className={styles.link}>
                        <strong> {props.locationFrom}</strong>
                    </Link> to 
                    <Link className={styles.link} underline="none">
                        <strong> {props.locationTo}</strong>
                    </Link>
                    </Box>
            </Box>

            <Box sx={{position: 'absolute', bottom: 11, right: 15, fontSize: 13, fontStyle: 'italic'}}>
                27 Minutes Ago
            </Box>

            <Button sx={{ height: 30, position: 'absolute', top: 15, right: 10 }}>
                Review
            </Button>
        </Box>
    )
}