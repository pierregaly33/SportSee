import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />
            <main className="home">
                <Sidebar />
                <div className="container">
                    <NavLink className="12" to="/user/12">
                        <p>Utilisateur 12</p>
                    </NavLink>
                    <NavLink className="18" to="/user/18">
                        <p>Utilisateur 18</p>
                    </NavLink>
                </div>
            </main>
        </>
    );
}

export default Home;
