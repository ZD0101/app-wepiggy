import React, {PureComponent} from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '02-01',
        miningApy: 590,
        totalBorrowings: 800,
        borrowApy: 1400
    },
    {
        name: '02-02',
        miningApy: 868,
        totalBorrowings: 967,
        borrowApy: 1506
    },
    {
        name: '02-03',
        miningApy: 1397,
        totalBorrowings: 1098,
        borrowApy: 989
    },
    {
        name: '02-04',
        miningApy: 1480,
        totalBorrowings: 1200,
        borrowApy: 1228
    },
    {
        name: '02-05',
        miningApy: 1520,
        totalBorrowings: 1108,
        borrowApy: 1100
    },
    {
        name: '02-06',
        miningApy: 1400,
        totalBorrowings: 680,
        borrowApy: 1700
    },
    {
        name: '02-07',
        miningApy: 1400,
        totalBorrowings: 680,
        borrowApy: 1450
    },
    {
        name: '02-08',
        miningApy: 800,
        totalBorrowings: 680,
        borrowApy: 1500
    },
    {
        name: '02-09',
        miningApy: 800,
        totalBorrowings: 680,
        borrowApy: 1500,
    },
    {
        name: '02-10',
        miningApy: 750,
        totalBorrowings: 680,
        borrowApy: 1650
    },
    {
        name: '02-11',
        miningApy: 900,
        totalBorrowings: 680,
        borrowApy: 1700
    },
    {
        name: '02-12',
        miningApy: 900,
        totalBorrowings: 680,
        borrowApy: 1600
    },

    {
        name: '02-13',
        miningApy: 1000,
        totalBorrowings: 680,
        borrowApy: 1500,
    },
    {
        name: '02-14',
        miningApy: 1100,
        totalBorrowings: 680,
        borrowApy: 1400
    },
    {
        name: '02-15',
        miningApy: 1200,
        totalBorrowings: 680,
        borrowApy: 1400
    },
    {
        name: '02-16',
        miningApy: 1200,
        totalBorrowings: 680,
        borrowApy: 1350
    },
];

export default class BorrowChart extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">

                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5"/>
                    <XAxis dataKey="name" scale="band"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="borrowApy" stroke="#5953BC"/>
                    <Bar dataKey="totalBorrowings" barSize={20} fill="#AAA8DE"/>
                    <Line type="monotone" dataKey="miningApy" stroke="#82DEFF"/>
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
