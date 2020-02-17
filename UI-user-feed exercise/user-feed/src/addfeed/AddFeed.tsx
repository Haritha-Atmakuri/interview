import React, { Component } from 'react';

export default class AddFeed extends Component<any, any> {
    state = {
        feedData: ''
    }
    onChangeFeedData(event: any) {
        const { value } = event.target;
        this.setState({
            feedData: value
        })
    }
    onClickFeedData() {
        this.props.postData && this.props.postData(this.state.feedData);
        this.setState({
            feedData: ''
        })
    }
    render() {
        return (
            <div className='d-flex align-items-center justify-content-between'>
                <textarea className='w-100' onChange={this.onChangeFeedData.bind(this)}></textarea>
                <button className='btn btn-primary m-4' onClick={this.onClickFeedData.bind(this)}>Post</button>
            </div>
        )
    }
}