"use client"

import React, { useState, useCallback, useRef } from 'react';
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Masonry } from '@mui/lab'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis } from "victory"
import DashboardLayout from '../../components/global/dashboard-layout';
import DashboardCard from '../../components/dashboard/dashboard-card';
import DashboardRecentItem from '../../components/dashboard/dashboard-recent-item';
import DashboardCargoItem from '../../components/dashboard/dashboard-cargo-item';
import '@fontsource/noto-sans-jp'
import importantKeys from '../../importantKeys.json'

import { UpdateTypes, TripUpdate } from '../../utils'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import styles from './page.module.css';


export default function Dashboard() {

  const [monthlyRevenue, setMonthlyRevenue] = useState([
    { x: "June 1st", y: 1500 },
    { x: "June 2nd", y: 3000 },
    { x: "June 3rd", y: 2500 },
    { x: "June 4th", y: 8000 }
  ])


  const tripUpdate: TripUpdate = {
    locationFrom: "Seattle",
    locationTo: "San Francisco",
    completed: true
  }

  const tripUpdate2: TripUpdate = {
    locationFrom: "Manhattan",
    locationTo: "Jersey City",
    completed: false
  }

  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans JP, Sans Serif",

      h2: {
        fontFamily: "Noto Sans JP, Sans Serif",
        fontWeight: 200
      }
    }
  })

    return (
      <ThemeProvider theme={theme}>
        
        <Box>
          <DashboardLayout>
            <Masonry sx={{ marginTop: 3, marginLeft: 2, width: "97%" }} columns={2} spacing={2}>
              <DashboardCard height={480} padding={2}>
                <h2 className={styles.cardHeader}>Recent Updates</h2>

                <DashboardRecentItem profile={{profileName: "Jamie Madison", profilePicture: "http://placehold.it/128"}} itemType={UpdateTypes.TRIP_COMPLETE} date={new Date("01-02-1998")} additionalInfo={tripUpdate} />
                <DashboardRecentItem profile={{profileName: "Alen Necol", profilePicture: "http://placehold.it/128"}} itemType={UpdateTypes.TRIP_STARTED} date={new Date("01-02-1998")} additionalInfo={tripUpdate2} />
                <DashboardRecentItem profile={{profileName: "Shawn Bolz", profilePicture: "http://placehold.it/128"}} itemType={UpdateTypes.COMPANY_JOINED} date={new Date("01-02-1998")} />
                <DashboardRecentItem profile={{profileName: "Victoria Wang", profilePicture: "http://placehold.it/128"}} itemType={UpdateTypes.COMPANY_LEFT} date={new Date("01-02-1998")} />
                <DashboardRecentItem profile={{profileName: "Jimmy Bagel", profilePicture: "http://placehold.it/128"}} itemType={UpdateTypes.TRUCK_ISSUE_SUBMITTED} date={new Date("01-02-1998")} additionalInfo={{ truck: "Diezel" }} />
              </DashboardCard>
              
              <DashboardCard height={595}>
                <LoadScript googleMapsApiKey={importantKeys.googleMapsAPIKey}>
                  <GoogleMap
                  mapContainerStyle={{borderRadius: 6, width: '100%', height: '540px'}}
                  center={{lat: 39.87, lng: -100.09}}
                  zoom={4}
                  > 
                  </GoogleMap>
                </LoadScript>
              </DashboardCard>
              <DashboardCard height={480} padding={2}>
                <h2 className={styles.cardHeader}>Cargo Requests</h2>

                <DashboardCargoItem
                  company={{
                    companyName: "TestCompany",
                    companyLogo: "http://placehold.it/128"
                  }}
                  date={new Date("01-01-1998")}
                  locationFrom="Manhattan"
                  locationTo="Newark"
                />
                <DashboardCargoItem
                  company={{
                    companyName: "TestCompany",
                    companyLogo: "http://placehold.it/128"
                  }}
                  date={new Date("01-01-1998")}
                  locationFrom="Austin"
                  locationTo="Dallas"
                />
                <DashboardCargoItem
                  company={{
                    companyName: "TestCompany",
                    companyLogo: "http://placehold.it/128"
                  }}
                  date={new Date("01-01-1998")}
                  locationFrom="Georgia"
                  locationTo="Texas"
                />
                <DashboardCargoItem
                  company={{
                    companyName: "TestCompany",
                    companyLogo: "http://placehold.it/128"
                  }}
                  date={new Date("01-01-1998")}
                  locationFrom="Austin"
                  locationTo="Dallas"
                />
                <DashboardCargoItem
                  company={{
                    companyName: "TestCompany",
                    companyLogo: "http://placehold.it/128"
                  }}
                  date={new Date("01-01-1998")}
                  locationFrom="Austin"
                  locationTo="Dallas"
                />
              </DashboardCard>
              <DashboardCard height={550}>
              <h2 className={styles.cardHeader}>Revenue (Last 30 Days)</h2>

              <VictoryChart
              theme={VictoryTheme.material}
              width={800}
              height={550}
              style={{
                parent: { height: 500 }
              }}
              > 

              <VictoryAxis
                style={{
                axis: { stroke: "#756f6a" }, // Define the axis line for the x-axis
                ticks: { stroke: "#756f6a" }, // Ensure ticks are visible
                tickLabels: { fill: "#756f6a" }, // Ensure tick labels are visible
                grid: { stroke: "none" }     // Remove grid lines
              }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: { stroke: "#756f6a" }, // Define the axis line for the y-axis
                  ticks: { stroke: "#756f6a" }, // Ensure ticks are visible
                  tickLabels: { fill: "#756f6a" }, // Ensure tick labels are visible
                  grid: { stroke: "none" }     // Remove grid lines
                }}
              />              

              <VictoryLine 
              width={800}
              interpolation="natural"
              data={monthlyRevenue}
              />
              
              <VictoryScatter 
              data={monthlyRevenue}
              size={7}
              style={{ data: { fill: "#BB56E8" } }}
              width={800}
              />

              </VictoryChart>



              </DashboardCard>
              
            </Masonry>
          </DashboardLayout>
            
        </Box>
        </ThemeProvider>
    )
}