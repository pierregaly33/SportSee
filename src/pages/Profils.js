import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/firstName";
import UserActivity from "../components/UserActivity";
import UserAverageSession from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import UserScore from "../components/UserScore";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import userApi from "../api/userApi";

function Profils() {
    let { userId } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await userApi(userId);
            setUserData(data);
        };

        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, []);
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                {userData !== null ? (
                    <section className="profil-main">
                        <UserProfile user={userData} />
                        <div className="dashboard">
                            <div className="dashboard-chart">
                                <div className="activity">
                                    <UserActivity userId={userData.userId} />
                                </div>
                                <div className="small-charts">
                                    <div className="charts average-session">
                                        <UserAverageSession userId={userData.userId} />
                                    </div>
                                    <div className="charts user-performance">
                                        <UserPerformance userId={userData.userId} />
                                    </div>
                                    <div className="charts user-score">
                                        <UserScore user={userData} />
                                    </div>
                                </div>
                            </div>
                            <div className="cards">
                                <Card type="Calories" value={userData.keyData.calorieCount} />
                                <Card type="Proteines" value={userData.keyData.proteinCount} />
                                <Card type="Glucides" value={userData.keyData.carbohydrateCount} />
                                <Card type="Lipides" value={userData.keyData.lipidCount} />
                            </div>
                        </div>
                    </section>
                ) : (
                    <div>loading</div>
                )}
            </main>
        </>
    );
}

export default Profils;
