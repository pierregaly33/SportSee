import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/firstName";
import UserActivity from "../components/UserActivity";
import UserAverageSession from "../components/UserAverageSession";

function Profils() {
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
                                <div className="average-session">
                                    <UserAverageSession userId={12} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profils;
