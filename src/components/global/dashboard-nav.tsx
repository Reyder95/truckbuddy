"use client"

import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, LocalShipping, Person4, Inventory2, DriveEta, AttachMoney, LocationOn, Settings, Store } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/kanit'
import styles from './global.module.css';
import React from 'react';
import { Link } from '@mui/material'

export default function DashboardNav() {

    const theme = createTheme({
        typography: {
            fontFamily: '"Kanit", "Sans Serif"',
            
            body1: {
                fontFamily: '"Kanit", "Sans Serif"',
                fontWeight: 400
            }
        }
    })


    return (
        <>
        <ThemeProvider theme={theme}>
        <Drawer PaperProps={{
            sx: { width: 190, marginTop: "75px" }
        }} variant="permanent" sx={{ width: 190, flexShrink: 0 }} anchor="left">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <Link color="inherit" underline="none" href="/dashboard"><ListItemText className={`${styles.dashboardListText} ${styles.kanitMedium}`} primary="Home"/></Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <strong>Management</strong>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalShipping />
                            </ListItemIcon>
                            <Link color="inherit" underline="none" href="/dashboard/fleet"><ListItemText className={styles.dashboardListText} primary="Fleet"/> </Link> 
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Person4 />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Employee"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory2 />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Cargo"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Store />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Company"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <strong>Data</strong>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DriveEta />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Trips"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AttachMoney />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Revenue"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <strong>Misc.</strong>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocationOn />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Map View"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText className={styles.dashboardListText} primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </ThemeProvider>

        </>
    )
}