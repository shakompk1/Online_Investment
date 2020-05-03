import React, { Component } from 'react';
import Chart from "react-google-charts";
import styled from 'styled-components';
import DatePicker from './DataPickerT';
import dayjs from 'dayjs';

const DateDiv = styled.div`
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;


export default class ChartComp extends Component {
    state = {
        symbl: '',
        data: [],
        startDate: new Date("2019/01/01"),
        endDate: new Date()
    }
    UNSAFE_componentWillMount() {
        this.setState({
            symbl: this.props.symbol
        })
    }

    componentDidMount() {
        const startDateSt = dayjs(this.state.startDate).format('YYYY-MM-DD');
        const endDateSt = dayjs(this.state.endDate).format('YYYY-MM-DD');

        this.getDataFromDatePicker(startDateSt, endDateSt);
    }

    getDataFromDatePicker(startDateSt, endDateSt) {
        fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.state.symbl}?from=${startDateSt}&to=${endDateSt}`)
            .then(rsult => rsult.json())
            .then(data => {
                console.log(data)
                this.setState({
                    symbl: data.symbol,
                    data: data.historical,
                })
            })
    }
    setStartDate = (date) => {
        this.setState({
            startDate: date
        });


        const startDateSt = dayjs(date).format('YYYY-MM-DD');
        const endDateSt = dayjs(this.state.endDate).format('YYYY-MM-DD');

        this.getDataFromDatePicker(startDateSt, endDateSt);
    }

    setEndDate = (date) => {
        this.setState({
            endDate: date
        });


        const startDateSt = dayjs(this.state.startDate).format('YYYY-MM-DD');
        const endDateSt = dayjs(date).format('YYYY-MM-DD');

        this.getDataFromDatePicker(startDateSt, endDateSt);

    }

    render() {
        console.log("second " + this.state.startDate);

        const newData = this.state.data.map(item => ([item.date, item.vwap]));
        console.log(newData);
        newData.unshift(['Year', this.state.symbl]);
        return (
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <DateDiv><DatePicker
                    setStartDate={this.setStartDate}
                    setEndDate={this.setEndDate}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate} /></DateDiv>

                <Chart
                    width={"900px"}
                    height={'400px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={newData}
                    options={{
                        title: 'Company Performance',
                        hAxis: { title: 'Time', titleTextStyle: { color: '#333' } },
                        vAxis: { minValue: 0 },
                        // For the legend to fit, we make the chart area smaller
                        chartArea: { width: '65%', height: '70%' },
                        // lineWidth: 25
                        animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 500,
                          },
                          enableInteractivity: false,
                    }}
                    chartEvents={[
                        {
                          eventName: 'animationfinish',
                          callback: () => {
                            console.log('Animation Finished')
                          },
                        },
                      ]}
                      rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}