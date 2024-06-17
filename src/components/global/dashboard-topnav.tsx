"use client"

import React, { useState } from 'react'
import { Box, AppBar, Typography, IconButton, Avatar, Menu, MenuItem } from '@mui/material'

export default function DashboardTopNav() {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <Box sx={{ position: "relative"}}>
            <AppBar elevation={0} color="transparent" sx={{ height: "75px", position: "relative", borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }} position="static">

                <Typography fontWeight="900" variant="h6" component="div" sx={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)"}}>
                    TruckBuddy
                </Typography>

                <Box sx={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)"}}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar src="http://placehold.it/128"/>
                    </IconButton>

                    <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Sign Out</Typography>
                        </MenuItem>

                    </Menu>
                </Box>

            </AppBar>
        </Box>
    )
}