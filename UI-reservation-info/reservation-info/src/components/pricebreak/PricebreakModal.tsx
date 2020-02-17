import React, { Component } from 'react';

export default class Pricebreak extends Component<PricebreakProps, any> {
    state = {
        dates: []
    }
    componentWillReceiveProps(nextProps: PricebreakProps) {
        const { startDateTimestamp, endDateTimestamp } = nextProps;
        let count = startDateTimestamp;
        let dates: number[] = [];
        do {
            if (count > 0) {
                dates.push(count)
            }
            count = count + 86400000;
        } while (count < endDateTimestamp);
        this.setState({
            dates
        })
    }
    render() {
        return (
            <div className="modal fade" id="dataPricebreak" tabIndex={-1} role="dialog" aria-labelledby="dataPricebreakLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="dataPricebreakLabel">Price Breakup</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Price</th>
                                        <th>Tax</th>
                                        <th>Fee</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.dates.map((item: number, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{new Date(item).toLocaleDateString()} to {new Date(item + 86400000).toLocaleDateString()}</td>
                                                    <td>{this.props.perDayPrice[index].RoomPrice}</td>
                                                    <td>{this.props.perDayPrice[index].RoomTax}</td>
                                                    <td>{this.props.perDayPrice[index].RoomFees}</td>
                                                    <td>{this.props.perDayPrice[index].RoomPrice + this.props.perDayPrice[index].RoomTax + this.props.perDayPrice[index].RoomFees}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <td colSpan={4} className='font-weight-bold text-right'>Total</td>
                                        <td className='font-weight-bold'>{
                                            this.props.perDayPrice.reduce((acc: number, item: any) => {
                                                return acc + item.RoomPrice + item.RoomTax + item.RoomFees
                                            }, 0)
                                        }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export interface PricebreakProps {
    perDayPrice: any;
    startDateTimestamp: number;
    endDateTimestamp: number;
    idIndex: number;
}