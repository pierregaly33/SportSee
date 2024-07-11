import React from "react";
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Bar, Rectangle } from "recharts";

function UserActivity({ data }) {
    console.log(data);
    return (
        <>
            <h3>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} width={700} height={300} barSize={7} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} />
                    <YAxis yAxisId="kilogram" tickMargin={30} orientation="right" axisLine={false} tickCount={3} />
                    <YAxis yAxisId="calories" hide />
                    <Tooltip />
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
                        name="Poids (kg)"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                        activeBar={<Rectangle stroke="blue" />}
                    />
                    <Bar
                        yAxisId="calories"
                        name="Calories brûlées (kCal)"
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
