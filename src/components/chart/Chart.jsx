import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
];

export default function Chart({aspect, title}) {
    return (
        <div className="chart">
            <div className="title">{title}</div>
  
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid id="total" strokeDasharray="3 3" className="chartGrid"/>
                    <XAxis color="gray" dataKey="name" />
                    <YAxis domain={[0, 'dataMax']} />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}