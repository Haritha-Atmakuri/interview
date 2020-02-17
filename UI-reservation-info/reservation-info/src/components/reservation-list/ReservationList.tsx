import React, { Component } from 'react';
import './reservation-list.scss';
import Pricebreak from '../pricebreak/PricebreakModal';

export default class ReservationList extends Component<ReservationListProps, any> {
    state = {
        selectedPriceData: [],
        startDateTimestamp: 0,
        endDateTimestamp: 0
    }
    priceBreak(item: any) {
        this.setState({
            selectedPriceData: item.price.perDay,
            startDateTimestamp: item.startDateTimestamp,
            endDateTimestamp: item.endDateTimestamp,
        })
    }
    render() {
        return (
            <React.Fragment>
                <table className='table text-center'>
                    <thead>
                        <tr>
                            <th>Primary Guest</th>
                            <th>Room Name</th>
                            <th>Dates</th>
                            <th>Total Price</th>
                            <th>Amenity Names</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data &&
                            this.props.data.map((item: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{
                                            item.guestInfo && item.guestInfo.filter((guestInfo: any) => guestInfo.type === 'Primary')[0].name
                                        }</td>
                                        <td>
                                            {item.roomDetails.Name}
                                        </td>
                                        <td>
                                            {
                                                item.startDate
                                            } to {
                                                item.endDate
                                            }
                                        </td>
                                        <td data-toggle="modal" data-target="#dataPricebreak" style={{cursor: 'pointer'}} onClick={this.priceBreak.bind(this, item)}>
                                            {
                                                item.price.perDay.reduce((acc: number, data: any) => {
                                                    const { RoomPrice, RoomTax, RoomFees } = data;
                                                    return acc + RoomPrice + RoomTax + RoomFees;
                                                }, 0)
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.amenities.reduce((acc: string, amenities: any) => {
                                                    return `${acc}${acc ? ', ' : ''}${amenities.name}`
                                                }, '')
                                            }
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                <Pricebreak idIndex={1} perDayPrice={this.state.selectedPriceData} startDateTimestamp={this.state.startDateTimestamp} endDateTimestamp={this.state.endDateTimestamp} />
            </React.Fragment>
        )
    }
}

export interface ReservationListProps {
    data: any;
}