import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from "./Components";
import styles from './App.module.css'
import { fetchData } from "./API";


class App extends Component {
  state = {
    data : {},
  }
  async componentDidMount(){
    const dataFromAPI = await fetchData();
    //console.log('Log response Data', dataFromAPI);
    this.setState({
      data: dataFromAPI
    });
    
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}


export default App;
