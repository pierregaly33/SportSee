import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <div className="container">
                    <NavLink className="12" to={`/user/12`}>
                        <p>Utilisateur </p>
                    </NavLink>
                </div>
            </main>
        </>
    );
}

export default Home;
