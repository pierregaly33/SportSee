import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/firstName";

function Profils() {
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <div className="profil">
                    <UserProfile userId={12} />
                </div>
            </main>
        </>
    );
}

export default Profils;
