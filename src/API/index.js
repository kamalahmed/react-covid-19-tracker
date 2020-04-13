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