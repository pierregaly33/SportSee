import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FirstName from "../components/FirstName";
import UserActivity from "../components/UserActivity";
import UserAverageSession from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import UserScore from "../components/UserScore";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { getUserActivity, getUserById } from "../store/store";

function Profils() {
    let { userId } = useParams();
    const [user, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserById(userId);
            setUserData(data);
        };

        const fetchActivity = async () => {
            const data = await getUserActivity(userId);
            setUserActivity(data.sessions);
        };

        fetchData().catch(console.error);

        fetchActivity().catch(console.error);
    }, [userId]);
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                {user !== null ? (
                    <section className="profil-main">
                        <FirstName user={user} />
                        <div className="dashboard">
                            <div className="dashboard-chart">
                                <div className="activity">
                                    <UserActivity data={userActivity} />
                                </div>
                                <div className="small-charts">
                                    <div className="charts average-session">
                                        <UserAverageSession userId={user} />
                                    </div>
                                    <div className="charts user-performance">
                                        <UserPerformance userId={user} />
                                    </div>
                                    <div className="charts user-score">
                                        <UserScore user={user} />
                                    </div>
                                </div>
                            </div>
                            <div className="cards">
                                <Card type="Calories" value={user.keyData.calorieCount} />
                                <Card type="Proteines" value={user.keyData.proteinCount} />
                                <Card type="Glucides" value={user.keyData.carbohydrateCount} />
                                <Card type="Lipides" value={user.keyData.lipidCount} />
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
