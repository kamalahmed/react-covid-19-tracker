import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from './Cards.module.css';
import banglaTarikh from 'bangla-tarikh';
import 'en2bnstr';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data : {confirmed, recovered, deaths, lastUpdate }}) => {
    if (!confirmed) {
        return 'তথ্য লোড হচ্ছে...... '
    }
    const Updated = banglaTarikh.format('DTS MMMM, YYYYT', new Date(lastUpdate) );
    
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} sm={6} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>আক্রান্ত</Typography>
                        <Typography variant="h5" color="textSecondary">
                            <CountUp 
                                start={0}
                                end = {confirmed.value}
                                duration = {2.5}
                                separator = "," />
                        </Typography>
                        <Typography color="textSecondary">জন করোনায় মোট আক্রান্ত হয়েছেন </Typography>
                        <Typography variant="body2" color="textSecondary">সর্বশেষ আপডেটঃ {Updated} </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} sm={6} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>আরোগ্য</Typography>
                        <Typography variant="h5" color="textSecondary">
                        <CountUp 
                                start={0}
                                end = {recovered.value}
                                duration = {2.5}
                                separator = "," />
                        </Typography>
                        <Typography color="textSecondary">জন করোনা থেকে মোট সুস্থ হয়েছেন </Typography>
                        <Typography variant="body2" color="textSecondary">সর্বশেষ আপডেটঃ {Updated} </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} sm={6} md={3} className={cx(styles.card, styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>মৃত্যু</Typography>
                        <Typography variant="h5" color="textSecondary">
                        <CountUp 
                                start={0}
                                end = {deaths.value}
                                duration = {2.5}
                                separator = "," />
                        </Typography>
                        <Typography color="textSecondary">জন করোনায় আক্রান্ত হয়ে মোট মারা গেছেন </Typography>
                        <Typography variant="body2" color="textSecondary">সর্বশেষ আপডেটঃ {Updated} </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;