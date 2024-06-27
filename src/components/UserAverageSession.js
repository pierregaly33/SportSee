import React from "react";
import { getUserSessions } from "../Store";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

function UserAverageSession({ userId }) {
    const data = getUserSessions(userId);

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

    return (
        <>
            <h3>
                Durée moyenne des <br />
                sessions
            </h3>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart width={260} height={260} data={data.sessions}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
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
