import React, { Component } from 'react';
import './Userfeed.css';

export default class UserFeed extends Component<UserFeedProps, any> {
    onClickLike() {
        this.props.onClickLike && this.props.onClickLike();
    }
    render() {
        const { user, value, timestamp, likes } = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{value}</h5>
                    <div className="card-text">
                        <p className='d-flex justify-content-between' style={{ fontSize: '15px' }}>
                            <label>
                                {user}
                            </label>
                            <label>
                                {new Date(Number(timestamp)).toLocaleString()}
                            </label>
                        </p>
                    </div>
                    <div className='border-top'>
                        <label htmlFor='likeButton'>{likes} &nbsp;</label>
                        <i id='likeButton' className="fa fa-thumbs-o-up" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={this.onClickLike.bind(this)}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export interface UserFeedProps {
    data: {
        user: string;
        value: string;
        id: number;
        timestamp: string;
        timeZoneOffset: string;
        likes: number;
    };
    onClickLike: any;
}