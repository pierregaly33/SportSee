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
import { getUserActivity, getUserById, getUserPerformance, getUserSession } from "../store/store";

function Profils() {
    let { userId } = useParams();

    const [user, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userAverageSession, setUserAverageSession] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserById(userId);
            setUserData(data);
        };

        const fetchActivity = async () => {
            const data = await getUserActivity(userId);
            setUserActivity(data.sessions);
        };

        const fetchAverageSession = async () => {
            const data = await getUserSession(userId);
            setUserAverageSession(data.sessions);
        };

        const fetchUserPerformance = async () => {
            const data = await getUserPerformance(userId);
            setUserPerformance(data.data);
        };

        fetchData().catch((e) => {
            console.log(e.message);
            setError(true);
        });
        fetchActivity().catch(console.error);
        fetchAverageSession().catch(console.error);
        fetchUserPerformance().catch(console.error);
    }, [userId]);

    if (user === undefined) {
        return (
            <>
                <Navbar />
                <main className="home">
                    <Sidebar />
                    <div className="error">ID introuvable</div>
                </main>
            </>
        );
    }

    if (error === true) {
        return (
            <>
                <Navbar />
                <main className="home">
                    <Sidebar />
                    <div className="error">Une erreur est survenue !</div>
                </main>
            </>
        );
    }

    return (
        <>
            <Navbar />
            {user !== null ? (
                <main>
                    <Sidebar />
                    <section className="profil-main">
                        <FirstName user={user} />
                        <div className="dashboard">
                            <div className="dashboard-chart">
                                <div className="activity">
                                    <UserActivity data={userActivity} />
                                </div>
                                <div className="small-charts">
                                    <div className="charts average-session">
                                        <UserAverageSession data={userAverageSession} />
                                    </div>
                                    <div className="charts user-performance">
                                        <UserPerformance data={userPerformance} />
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
                </main>
            ) : (
                <main className="home">
                    <Sidebar />
                    <div className="loading">loading...</div>
                </main>
            )}
        </>
    );
}

export default Profils;
