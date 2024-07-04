import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { getUserById } from "../Store";

function UserScore(userId) {
    const data = getUserById(userId);
    const score = data.todayScore ? data.todayScore : data.score;
    const dataArray = [{ name: "score", value: score }];
    return (
        <>
            <h3>Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="0%" outerRadius="0%" data={dataArray} startAngle={90} endAngle={450}>
                    <RadialBar
                        data={[{ value: 1 }]}
                        dataKey="value"
                        barSize={170}
                        fill="#FFF"
                        isAnimationActive={false}
                    />
                    <RadialBar dataKey="value" barSize={10} cornerRadius={100} fill="#FF0000" />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="chartgoal-label center">
                <p className="percent">{data.todayScore && data.todayScore * 100}%</p>
                <p>de votre</p>
                <p>objectif</p>
            </div>
        </>
    );
}

export default UserScore;
