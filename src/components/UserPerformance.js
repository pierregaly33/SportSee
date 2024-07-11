import React from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { getUserPerformance } from "../store/store";

function UserPerformance({ userId }) {
    const data = getUserPerformance(userId);

    function formatKind(kind) {
        if (kind === 1) {
            return "Cardio";
        } else if (kind === 2) {
            return "Energy";
        } else if (kind === 3) {
            return "Endurance";
        } else if (kind === 4) {
            return "Strength";
        } else if (kind === 5) {
            return "Speed";
        } else if (kind === 6) {
            return "Intensity";
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data.data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} tick={{ fontSize: 11, fill: "white" }} />
                <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default UserPerformance;
