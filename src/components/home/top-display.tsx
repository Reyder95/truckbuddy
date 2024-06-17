
"use client"

import styles from './top-display.module.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material'


export default function TopDisplay() {

    return (
      <main className={styles.topdisplay}>
        <Carousel 
        stopAutoPlayOnHover={false} 
        indicators={false}
        interval={7500}
        swipe={false}
        duration={1500}
        >
          <img src="/images/truck1.jpg"/>
          <img src="/images/truck2.jpg"/>
          <img src="/images/truck3.jpg"/>
          <img src="/images/truck4.jpg"/>
        </Carousel>

        <div className={styles.overHome}>
          <h1>TruckBuddy</h1>
          <Button className={styles.headerButtonContained} variant="contained">Sign Up</Button>
          <Button className={styles.headerButton} variant="outlined">Log In</Button>
        </div>
      </main>
    );
}
