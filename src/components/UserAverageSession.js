import React from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, Rectangle } from "recharts";

function UserAverageSession({ data }) {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <div style={{ backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                        <p>{`${payload[0].value} min`}</p>
                    </div>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({ points }) => {
        return <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={500} height={260} />;
    };

    function formatDay(day) {
        if (day === 1) {
            return "L";
        } else if (day === 2) {
            return "M";
        } else if (day === 3) {
            return "M";
        } else if (day === 4) {
            return "J";
        } else if (day === 5) {
            return "V";
        } else if (day === 6) {
            return "S";
        } else if (day === 7) {
            return "D";
        }
    }

    return (
        <>
            <h3>
                Durée moyenne des <br />
                sessions
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width="100%" height="100%" data={data} margin={{ top: 80, bottom: 16, left: 16, right: 16 }}>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tickFormatter={formatDay}
                        tick={{ fill: "white", fontSize: 12 }}
                        interval={0}
                    />
                    <YAxis hide padding={{ bottom: 15 }} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="#FFFFFF"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 3, stroke: "#FFFFFF", strokeWidth: 2, fill: "#FFFFFF" }}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default UserAverageSession;
