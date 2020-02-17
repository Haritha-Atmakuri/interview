import React, { Component } from "react";

export default class Search extends Component<SearchProps, any>{
    onChange(event: any) {
        this.props.selectedDate(event.target.value);
    }
    render() {
        return (
            <div className='text-right'>
                <label>Search Reservation Dates &nbsp;&nbsp;</label>
                <input type='date' onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}

export interface SearchProps {
    selectedDate: any;
}