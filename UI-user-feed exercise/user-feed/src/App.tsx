import React, { Component } from 'react';
import './App.css';
import UserFeed from './userfeedlist/Userfeed';
import axios from 'axios';
import AddFeed from './addfeed/AddFeed';

const userFeedTemplate = {
  user: "",
  value: "",
  id: 0,
  timestamp: '',
  timeZoneOffset: "",
  likes: 0
}

export default class App extends Component<any, AppState> {
  state = {
    userfeeds: []
  }
  componentDidMount() {
    axios.get('data.json').then(res => {
      const { feed } = res.data;
      console.log(feed);
      this.setState({
        userfeeds: feed
      })
    }).catch(err => {
      console.log(err);
    })
  }
  onClickLike(index: number) {
    let { userfeeds }: { userfeeds: UserFeedTemplate[] } = this.state;
    userfeeds[index].likes = userfeeds[index].likes + 1;
    this.setState({
      userfeeds
    })
  }
  postFeed(userFeed: string) {
    console.log(userFeed);
    const { userfeeds }: { userfeeds: UserFeedTemplate[] } = this.state;
    userfeeds.unshift({ ...userFeedTemplate, id: 1, user: 'User 1', value: userFeed, timestamp: String(new Date().getTime()) })
    this.setState({
      userfeeds
    })
  }
  render() {
    return (
      <div className="container">
        <AddFeed postData={this.postFeed.bind(this)} />
        <div className='font-weight-bold text-right'>Total Feeds: {this.state.userfeeds.length}</div>
        {
          this.state.userfeeds.map((item: UserFeedTemplate, index: number) => {
            return <UserFeed key={index} data={item} onClickLike={this.onClickLike.bind(this, index)} />
          })
        }
      </div>
    )
  }
}

export interface UserFeedTemplate {
  user: string;
  value: string;
  id: number;
  timestamp: string;
  timeZoneOffset: string;
  likes: number;
}

export interface AppState {
  userfeeds: UserFeedTemplate[]
}