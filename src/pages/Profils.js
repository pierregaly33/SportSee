import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/firstName";
import UserActivity from "../components/UserActivity";
import UserAverageSession from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import UserScore from "../components/UserScore";
import Card from "../components/Card";
import { getUserById } from "../Store";

function Profils() {
    const {
        keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
    } = getUserById(12);

    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <section className="profil-main">
                    <UserProfile userId={12} />
                    <div className="dashboard">
                        <div className="dashboard-chart">
                            <div className="activity">
                                <UserActivity userId={12} />
                            </div>
                            <div className="small-charts">
                                <div className="charts average-session">
                                    <UserAverageSession userId={12} />
                                </div>
                                <div className="charts user-performance">
                                    <UserPerformance userId={12} />
                                </div>
                                <div className="charts user-score">
                                    <UserScore userId={12} />
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <Card type="Calories" value={calorieCount} />
                            <Card type="Proteines" value={proteinCount} />
                            <Card type="Glucides" value={carbohydrateCount} />
                            <Card type="Lipides" value={lipidCount} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profils;
