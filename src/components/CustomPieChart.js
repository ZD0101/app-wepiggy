import React, {PureComponent} from 'react';
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';

const data01 = [
    {name: 'Group A', value: 700},
    {name: 'Group B', value: 300}
];

export default class CustomPieChart extends PureComponent {

    render() {
        return (
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data01}
                            innerRadius={40}
                            outerRadius={80}
                            fill="#01B288"
                            label
                        />
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
        );
    }
}
