import axios from "axios";

const apiEndPoint = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiEndPoint);

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
    } catch (error) {
        console.log('ups! got some error,', error);
    }
};

export const fetchDailyData = async () => {
    try {
        const {data} =  await axios.get(`${apiEndPoint}/daily`);
        
        const necessaryData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,

        }));
        return necessaryData;

    } catch (error) {
        console.log('ups! got some error,', error);
    }
};