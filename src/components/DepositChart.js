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
        totalDeposits: 800,
        depositApy: 1400
    },
    {
        name: '02-02',
        miningApy: 868,
        totalDeposits: 967,
        depositApy: 1506
    },
    {
        name: '02-03',
        miningApy: 1397,
        totalDeposits: 1098,
        depositApy: 989
    },
    {
        name: '02-04',
        miningApy: 1480,
        totalDeposits: 1200,
        depositApy: 1228
    },
    {
        name: '02-05',
        miningApy: 1520,
        totalDeposits: 1108,
        depositApy: 1100
    },
    {
        name: '02-06',
        miningApy: 1400,
        totalDeposits: 680,
        depositApy: 1700
    },
    {
        name: '02-07',
        miningApy: 1400,
        totalDeposits: 680,
        depositApy: 1450
    },
    {
        name: '02-08',
        miningApy: 800,
        totalDeposits: 680,
        depositApy: 1500
    },
    {
        name: '02-09',
        miningApy: 800,
        totalDeposits: 680,
        depositApy: 1500,
    },
    {
        name: '02-10',
        miningApy: 750,
        totalDeposits: 680,
        depositApy: 1650
    },
    {
        name: '02-11',
        miningApy: 900,
        totalDeposits: 680,
        depositApy: 1700
    },
    {
        name: '02-12',
        miningApy: 900,
        totalDeposits: 680,
        depositApy: 1600
    },

    {
        name: '02-13',
        miningApy: 1000,
        totalDeposits: 680,
        depositApy: 1500,
    },
    {
        name: '02-14',
        miningApy: 1100,
        totalDeposits: 680,
        depositApy: 1400
    },
    {
        name: '02-15',
        miningApy: 1200,
        totalDeposits: 680,
        depositApy: 1400
    },
    {
        name: '02-16',
        miningApy: 1200,
        totalDeposits: 680,
        depositApy: 1350
    },
];

export default class DepositChart extends PureComponent {

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
                    <Tooltip contentStyle={{textAlign: "left"}} viewBox={{ x: 0, y: 0, width: 400, height: 400 }}/>
                    <Legend/>
                    <Line type="monotone" dataKey="depositApy" stroke="#FE4DA5"/>
                    <Bar dataKey="totalDeposits" barSize={20} fill="#FFB4D4"/>
                    <Line type="monotone" dataKey="miningApy" stroke="#FFC133"/>
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
