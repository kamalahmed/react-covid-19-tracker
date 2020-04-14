import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../API'
import { Line, Bar } from "react-chartjs-2";
import styles from './Chart.module.css';
import banglaTarikh from 'bangla-tarikh';


const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchFromApi = async () => {
            const initialData = await fetchDailyData();
            setDailyData( initialData );
        }

        fetchFromApi();
       
    });

    const LineChart = (
         dailyData ? (
          <Line
          defaultFontColor = '#ffffff'
            data = {{
                labels: dailyData.map(({date}) => banglaTarikh.format('DTS MMMM, YYYYT', new Date(date) )),
                datasets: [{
                    data : dailyData.map(({confirmed}) => confirmed),
                    label : 'আক্রান্ত',
                    borderColor: 'yellow',
                    fill: true,
                }, {
                    data : dailyData.map(({deaths}) => deaths),
                    label : 'মৃত',
                    borderColor: 'red',
                    fill: 'Loading chart....',
                }]
            }} />  
        ) : null
    );

    return (
        <div className={styles.container} >
            {LineChart}
        </div>
    )
}

export default Chart;