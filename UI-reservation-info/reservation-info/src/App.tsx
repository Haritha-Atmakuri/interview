import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ReservationList from './components/reservation-list/ReservationList';
import axios from 'axios';
import Search from './components/search/Search';

export default class App extends Component {
  state = {
    reservationList: [],
    reservationListBuff: []
  }
  componentDidMount() {
    axios.get('data.json').then(res => {
      let { data } = res;
      data = data.map((item: any) => {
        return {
          ...item,
          startDateTimestamp: new Date(item.startDate).getTime(),
          endDateTimestamp: new Date(item.endDate).getTime(),
        }
      })
      this.setState({
        reservationList: data,
        reservationListBuff: data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  selectedDate(event: string) {
    const { reservationListBuff } = this.state;
    const splitDate = event.split('-');
    let list = reservationListBuff;
    const date = new Date(`${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`).getTime();
    if(!isNaN(date))
       list = reservationListBuff.filter((item: any) => ((date >= item.startDateTimestamp) && (date <= item.endDateTimestamp)))
    this.setState({
      reservationList: list
    })
  }
  render() {
    return (
      <div className='container'>
        <h2 className='text-center'>
          Reservation List
        </h2>
        <Search selectedDate={this.selectedDate.bind(this)} />
        <ReservationList data={this.state.reservationList} />
      </div>
    )
  }
}