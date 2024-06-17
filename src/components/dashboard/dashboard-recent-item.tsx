import { Box, Avatar, Link } from '@mui/material'
import { LocationOn, Store, Build } from "@mui/icons-material"
import { Profile, UpdateTypes, TruckIssueUpdate, TripUpdate } from '../../utils'
import styles from './dashboard.module.css'
import React from 'react';

interface ItemProps {
    profile: Profile,
    itemType: UpdateTypes,
    date: Date,
    additionalInfo?: TruckIssueUpdate | TripUpdate 
}

export default function DashboardRecentItem(props: ItemProps) {

    const updateMessages: Record<UpdateTypes, () => React.ReactNode> = {
        [UpdateTypes.TRIP_COMPLETE]: () => {
            if (props.additionalInfo)
            {
                if ("locationFrom" in props.additionalInfo)
                {
                    if (props.additionalInfo.completed)
                        return <p>has completed a trip from <Link underline="none" className={styles.link}><strong>{props.additionalInfo.locationFrom}</strong></Link> to <Link className={styles.link} underline="none"><strong>{props.additionalInfo.locationTo}</strong></Link></p>
                }
            }
            return <p></p>
        },
        [UpdateTypes.TRIP_STARTED]: () => {
            if (props.additionalInfo)
            {
                if ("locationFrom" in props.additionalInfo)
                {
                    if (!props.additionalInfo.completed)
                        return <p>has started a trip from <Link underline="none" className={styles.link}><strong>{props.additionalInfo.locationFrom}</strong></Link> to <Link className={styles.link} underline="none"><strong>{props.additionalInfo.locationTo}</strong></Link></p>
                }
            }
            return <p></p>
        },
        [UpdateTypes.COMPANY_JOINED]: () => {
            return <p>has joined the company</p>
        },
        [UpdateTypes.COMPANY_LEFT]: () => {
            return <p>has left the company</p>
        },
        [UpdateTypes.TRUCK_ISSUE_SUBMITTED]: () => {
            if (props.additionalInfo)
            {
                if ("truck" in props.additionalInfo)
                {
                    return <p>has submitted an issue report for <Link underline="none" className={styles.link}><strong>{props.additionalInfo.truck}</strong></Link></p>
                }
            }
        },
    }

    const updateIcons: Record<UpdateTypes, () => React.ReactNode> = {
        [UpdateTypes.TRIP_COMPLETE]: () => <LocationOn sx={{ marginRight: 2, fontSize: 30, color: "#F098DC" }} />,
        [UpdateTypes.TRIP_STARTED]: () => <LocationOn sx={{ marginRight: 2, fontSize: 30, color: "#F098DC" }} />,
        [UpdateTypes.COMPANY_JOINED]: () => <Store sx={{ marginRight: 2, fontSize: 30, color: "#8293F0" }} />,
        [UpdateTypes.COMPANY_LEFT]: () => <Store sx={{ marginRight: 2, fontSize: 30, color: "#8293F0" }} />,
        [UpdateTypes.TRUCK_ISSUE_SUBMITTED]: () => <Build sx={{ marginRight: 2, fontSize: 30, color: "#F0A178" }} />
    }

    
    

    return (
        <Box className={styles.dashboardItemContainer} sx={{position: 'relative'}}>
            <Box className={styles.dashboardItem} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                <Box>
                    {updateIcons[props.itemType]()}
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Avatar className={styles.profileAvatar} src="http://placehold.it/128"/>
                    <Link className={`${styles.profileName} ${styles.link}`} underline="none"><strong>{ props.profile.profileName }</strong></Link>
                </Box>
                <Box sx={{ marginLeft: 1 }}>{updateMessages[props.itemType]()}</Box>

            </Box>
            <Box sx={{position: 'absolute', bottom: 11, right: 15, fontSize: 13, fontStyle: 'italic'}}>
                27 Minutes Ago
            </Box>
        </Box>

    )
}