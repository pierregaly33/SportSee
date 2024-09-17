import React from "react";
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Bar, Rectangle } from "recharts";

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: "red",
                    padding: "10px",
                    borderRadius: "5px",
                    color: "white",
                }}
            >
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value} kCal</p>
            </div>
        );
    }

    return null;
}

function UserActivity({ data }) {
    return (
        <>
            <h3>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} width={700} height={300} barSize={7} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} />
                    <YAxis yAxisId="kilogram" tickMargin={30} orientation="right" axisLine={false} tickCount={3} />
                    <YAxis yAxisId="calories" hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        iconType="circle"
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{
                            paddingBottom: 40,
                            paddingRight: 40,
                        }}
                    />
                    <Bar
                        yAxisId="kilogram"
                        name="kg"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                        activeBar={<Rectangle stroke="blue" />}
                    />
                    <Bar
                        yAxisId="calories"
                        name="kCal"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                        activeBar={<Rectangle stroke="purple" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default UserActivity;
